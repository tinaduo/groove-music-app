import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import styles from "@/styles/NewReview.module.css";

const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077";
const REDIRECT_URI = "https://groove-music-app.vercel.app/chart";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "user-top-read";

export default function NewReview() {
    const [token, setToken] = useState("");
    const [topGenres, setTopGenres] = useState([]);

    useEffect(() => {
        const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
            const parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        if (hashParams.access_token) {
            setToken(hashParams.access_token);
        }
    }, []);

    useEffect(() => {
        const fetchTopGenres = async () => {
            try {
                if (!token) return;

                const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                const genres = data.items.flatMap(artist => artist.genres);
                const genreCounts = genres.reduce((acc, genre) => {
                    acc[genre] = (acc[genre] || 0) + 1;
                    return acc;
                }, {});

                const genreArray = Object.entries(genreCounts).map(([genre, count]) => ({
                    genre,
                    count,
                }));

                const sortedGenres = genreArray.sort((a, b) => b.count - a.count);
                setTopGenres(sortedGenres);
            } catch (error) {
                console.error('Error fetching top genres:', error);
            }
        };

        fetchTopGenres();
    }, [token]);

    useEffect(() => {
        if (topGenres.length > 0) {
            renderPieChart();
        }
    }, [topGenres]);

    const renderPieChart = () => {
        const ctx = document.getElementById('myChart');
        const labels = topGenres.map(genre => genre.genre);
        const data = topGenres.map(genre => genre.count);

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels,
                datasets: [{
                    data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ],
                    borderWidth: 1,
                }],
            },
        });
    };

    return (
        <main className={styles.main}>
            {!token && (
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>
                    Login to Spotify
                </a>
            )}
            {token && (
                <div>
                    <h1>User Top Genres</h1>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            )}
        </main>
    );
}
