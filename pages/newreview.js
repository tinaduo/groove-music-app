import { useState, useEffect } from "react";
import styles from "@/styles/NewReview.module.css";

export default function NewReview() {
    const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077";
    const REDIRECT_URI = "https://groove-music-app.vercel.app/newreview";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [songs, setSongs] = useState([]);

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
        const searchSongs = async () => {
            if (searchKey.trim() === "") {
                setSongs([]);
                return;
            }
            try {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchKey)}&type=track`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setSongs(data.tracks.items);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        searchSongs();
    }, [searchKey, token]);

    const renderSongs = () => {
        const MAX_TITLE_LENGTH = 30;
        return (
            <div className={`${styles.albumGrid}`}>
                {songs.map(song => (
                    <div key={song.id} className={`${styles.albumContainer}`}>
                        <div className={`${styles.albumItem}`}>
                            {song.album.images.length ? <img className={`${styles.songCover}`} width={"168px"} src={song.album.images[0].url} alt="" /> : <div>No Image</div>}
                            <h3 className={`${styles.songName}`}>{song.name.length > MAX_TITLE_LENGTH ? `${song.name.substring(0, MAX_TITLE_LENGTH)}...` : song.name}</h3>
                            <p className={`${styles.artistName}`}>{song.artists.map(artist => artist.name).join(", ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <main className={`${styles.main}`}>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    Login to Spotify</a>
                : null}

            {token &&
                <form>
                    <svg
                        className={`${styles.searchIcon}`}
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44194 10.3548C8.28115 11.2823 6.80929 11.7301 5.32866 11.6062C3.84803 11.4824 2.47102 10.7963 1.48044 9.68887C0.489867 8.58145 -0.0390752 7.13677 0.00225135 5.65154C0.0435779 4.16631 0.652036 2.75328 1.70266 1.70266C2.75328 0.652036 4.16631 0.0435779 5.65154 0.00225135C7.13677 -0.0390752 8.58145 0.489867 9.68887 1.48044C10.7963 2.47102 11.4824 3.84803 11.6062 5.32866C11.7301 6.80929 11.2823 8.28115 10.3548 9.44194L14.7953 13.8815C14.8587 13.9407 14.9096 14.012 14.9449 14.0912C14.9802 14.1704 14.9992 14.256 15.0008 14.3427C15.0023 14.4294 14.9863 14.5156 14.9538 14.596C14.9214 14.6764 14.873 14.7495 14.8117 14.8108C14.7503 14.8722 14.6773 14.9205 14.5969 14.953C14.5164 14.9855 14.4303 15.0014 14.3436 14.9999C14.2568 14.9984 14.1713 14.9794 14.0921 14.9441C14.0128 14.9088 13.9415 14.8579 13.8824 14.7944L9.44194 10.3548ZM2.61592 9.00961C1.98382 8.37744 1.5533 7.57208 1.37879 6.69532C1.20427 5.81855 1.29358 4.90972 1.63543 4.08369C1.97728 3.25767 2.55633 2.55152 3.29939 2.05449C4.04246 1.55746 4.91618 1.29186 5.81015 1.29126C6.70412 1.29066 7.57821 1.55508 8.32194 2.05111C9.06567 2.54714 9.64567 3.25251 9.98863 4.07807C10.3316 4.90364 10.4221 5.81234 10.2488 6.68935C10.0755 7.56635 9.64602 8.37229 9.01478 9.0053L9.01047 9.00961L9.00616 9.01305C8.15794 9.85931 7.0085 10.3343 5.81033 10.3336C4.61215 10.333 3.46322 9.85678 2.61592 9.00961Z" fill="#7D7E80" />
                    </svg>
                    <input
                        className={`${styles.searchBar}`}
                        type="text"
                        value={searchKey}
                        placeholder="Search for a song"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </form>
            }
            {songs.length > 0 ? renderSongs() : <h2>No songs found</h2>}
        </main>
    );
}
