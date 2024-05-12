import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077"
    const REDIRECT_URI = "https://groove-music-app.vercel.app/onboarding"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const router = useRouter();

    useEffect(() => {
        const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
            const parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        if (hashParams.access_token) {
            sessionStorage.setItem("accessToken", hashParams.access_token);
            router.replace(router.asPath.split('#')[0]);
        }
    }, []);

    const token = sessionStorage.getItem("accessToken");

    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
    };

    return (
        <>
            <main>
                <div>
                    <h1>GROOVE</h1>
                </div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                        Login to Spotify
                    </a>
                    :
                    <button onClick={handleLogout}>Logout</button>}
            </main>
        </>
    );
}
