import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import styles from "@/styles/Chart.module.css";
import Head from "next/head";
import Link from 'next/link';

const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077";
const REDIRECT_URI = "https://groove-music-app.vercel.app/stats";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "user-top-read";

export default function StatsPage() {
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
                setTopGenres(sortedGenres.slice(0, 10));
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
                    backgroundColor: [
                        'rgba(130, 143, 255, 0.5)',
                        'rgba(255, 209, 99, 0.5)',
                        'rgba(255, 138, 115, 0.5)',
                        'rgba(255, 144, 218, 0.5)',
                        'rgba(168, 135, 255, 0.5)',
                        'rgba(99, 226, 134, 0.5',
                        'rgba(220, 119, 85, 0.5)',
                        'rgba(246, 198, 92, 0.5)',
                        'rgba(212, 196, 255, 0.5)',
                        'rgba(99, 226, 134, 0.5)',
                    ],
                    data,
                    borderWidth: 1,
                }],
            },
        });
    };

    return (
        <>
            <Head>
                <title>GROOVE - STATS</title>
                <meta name="description" content="See your Top Spotify Genres!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.backbuttonContainer}>
                    <Link
                        className={styles.backbuttonLink}
                        href="https://groove-music-app.vercel.app/newreview">
                        <svg className={styles.backButton} width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.8291 3.2017L0.999935 9.03087L6.8291 14.7983" stroke="#D9D9D9" stroke-width="1.28165" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.3241 14.1438C19.9982 14.1438 19.6724 14.091 19.3466 13.9856C19.0303 13.8802 18.738 13.7412 18.4697 13.5687C18.2109 13.3866 17.9905 13.1902 17.8084 12.9793C17.6359 12.7589 17.5209 12.5385 17.4634 12.3181L17.8371 12.1168V13.9569H16.3565V3.36217H17.8371V8.17794L17.6071 8.04856C17.655 7.82814 17.7605 7.6173 17.9234 7.41604C18.0863 7.2052 18.2924 7.01832 18.5415 6.8554C18.8003 6.6829 19.0782 6.54872 19.3753 6.45289C19.6724 6.34747 19.9743 6.29476 20.281 6.29476C20.9614 6.29476 21.5652 6.46247 22.0923 6.7979C22.6194 7.13333 23.0363 7.59813 23.3429 8.19232C23.6496 8.77692 23.8029 9.44777 23.8029 10.2049C23.8029 10.962 23.6496 11.6376 23.3429 12.2318C23.0458 12.826 22.6337 13.2956 22.1066 13.6406C21.5795 13.976 20.9854 14.1438 20.3241 14.1438ZM20.0797 12.7925C20.5205 12.7925 20.9135 12.6823 21.2585 12.4618C21.6035 12.2318 21.8766 11.9251 22.0779 11.5418C22.2791 11.1489 22.3798 10.7032 22.3798 10.2049C22.3798 9.71612 22.2791 9.28006 22.0779 8.89672C21.8862 8.50379 21.6179 8.19711 21.2729 7.97669C20.9279 7.75626 20.5301 7.64605 20.0797 7.64605C19.6293 7.64605 19.2316 7.75626 18.8865 7.97669C18.5415 8.19711 18.2684 8.50379 18.0671 8.89672C17.8659 9.28006 17.7653 9.71612 17.7653 10.2049C17.7653 10.7032 17.8659 11.1489 18.0671 11.5418C18.2684 11.9251 18.5415 12.2318 18.8865 12.4618C19.2316 12.6823 19.6293 12.7925 20.0797 12.7925ZM28.3152 14.1438C27.6922 14.1438 27.122 13.9712 26.6045 13.6262C26.0965 13.2812 25.6892 12.8116 25.3826 12.2174C25.0759 11.6233 24.9225 10.9524 24.9225 10.2049C24.9225 9.44777 25.0759 8.77692 25.3826 8.19232C25.6988 7.59813 26.1205 7.13333 26.6476 6.7979C27.1843 6.46247 27.7833 6.29476 28.4445 6.29476C28.8375 6.29476 29.1968 6.35226 29.5227 6.46726C29.8485 6.58227 30.1312 6.74519 30.3708 6.95603C30.62 7.15729 30.8213 7.39209 30.9746 7.66043C31.1375 7.92877 31.2382 8.21628 31.2765 8.52295L30.9459 8.40795V6.45289H32.4409V14H30.9459V12.2031L31.2909 12.1024C31.2334 12.3612 31.1136 12.6152 30.9315 12.8643C30.759 13.1039 30.5338 13.3196 30.2558 13.5112C29.9875 13.7029 29.6856 13.8562 29.3502 13.9712C29.0243 14.0863 28.6793 14.1438 28.3152 14.1438ZM28.7033 12.7781C29.1537 12.7781 29.5514 12.6679 29.8964 12.4475C30.2415 12.227 30.5098 11.9251 30.7015 11.5418C30.9027 11.1489 31.0034 10.7032 31.0034 10.2049C31.0034 9.71612 30.9027 9.28006 30.7015 8.89672C30.5098 8.51337 30.2415 8.21149 29.8964 7.99106C29.5514 7.77064 29.1537 7.66043 28.7033 7.66043C28.2624 7.66043 27.8695 7.77064 27.5245 7.99106C27.1891 8.21149 26.9207 8.51337 26.7195 8.89672C26.5278 9.28006 26.432 9.71612 26.432 10.2049C26.432 10.7032 26.5278 11.1489 26.7195 11.5418C26.9207 11.9251 27.1891 12.227 27.5245 12.4475C27.8695 12.6679 28.2624 12.7781 28.7033 12.7781ZM37.714 14.1438C37.0144 14.1438 36.3867 13.9712 35.8308 13.6262C35.2845 13.2812 34.8485 12.8116 34.5226 12.2174C34.2064 11.6233 34.0483 10.9572 34.0483 10.2193C34.0483 9.48132 34.2064 8.81525 34.5226 8.22107C34.8485 7.62688 35.2845 7.15729 35.8308 6.81228C36.3867 6.46726 37.0144 6.29476 37.714 6.29476C38.3849 6.29476 38.9934 6.43372 39.5397 6.71165C40.0955 6.97999 40.5172 7.34896 40.8047 7.81856L39.9853 8.82484C39.832 8.60441 39.6355 8.40316 39.3959 8.22107C39.1563 8.03898 38.9024 7.89523 38.634 7.78981C38.3657 7.68439 38.1069 7.63168 37.8578 7.63168C37.3977 7.63168 36.9856 7.74668 36.6215 7.97669C36.2669 8.19711 35.9842 8.50379 35.7733 8.89672C35.5625 9.28964 35.4571 9.73049 35.4571 10.2193C35.4571 10.708 35.5673 11.1489 35.7877 11.5418C36.0081 11.9251 36.3004 12.2318 36.6646 12.4618C37.0288 12.6918 37.4313 12.8068 37.8721 12.8068C38.1309 12.8068 38.3801 12.7637 38.6197 12.6775C38.8688 12.5912 39.1084 12.4618 39.3384 12.2893C39.5684 12.1168 39.7841 11.906 39.9853 11.6568L40.8047 12.6631C40.498 13.0943 40.0572 13.4489 39.4822 13.7269C38.9167 14.0048 38.3274 14.1438 37.714 14.1438ZM43.5527 11.6424L43.4808 10.0324L47.089 6.45289H49.0872L43.5527 11.6424ZM42.2014 14V3.36217H43.6821V14H42.2014ZM47.2903 14L44.444 10.6793L45.4934 9.71612L49.1879 14H47.2903Z" fill="#D9D9D9" />
                        </svg>
                    </Link>
                </div>
                {!token && (
                    <>
                        <p className={styles.paragraphLogin}>Login with Spotify to see your charts</p>
                        <a className={styles.spotifyButton} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>
                            Login with Spotify
                        </a>
                    </>
                )}
                {token && (
                    <div className={styles.main}>
                        <div className={styles.chartContainer}>
                        <h1 className={styles.genresHeader}>Your Top Genres</h1>
                        <canvas
                            className={styles.chartCanvas}
                            id="myChart"
                        ></canvas>
                        </div>
                        <p className={styles.paragraph}>This chart is a colourful and intuitive visual breakdown of your top genres, offering a pieced-together snapshot of your musical inclinations. Each section corresponds to a genre that resonates with your listening habits, highlighting the rich variety in your playlist. <br></br> It's an at-a-glance revelation of where your audio adventures have taken you, a reflection of your eclectic taste. To explore these sounds that strike a chord with you, step into <span className={styles.Span}>Tunebox</span> and let your personal soundtrack unfold.</p>
                        <Link
                            href="/Quiz"
                            className={styles.buttonContainer}>Go to Tunebox</Link>
                    </div>
                )}
            </main>
        </>
    );
}