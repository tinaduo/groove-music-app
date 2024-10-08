import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";

const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077"
const REDIRECT_URI = "https://groove-music-app.vercel.app/onboarding"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

export default function Home() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = sessionStorage.getItem("spotifyToken");
        if (storedToken) {
            setToken(storedToken);
        } else {
            const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
                const parts = item.split("=");
                result[parts[0]] = parts[1];
                return result;
            }, {});

            if (hashParams.access_token) {
                sessionStorage.setItem("spotifyToken", hashParams.access_token);
                setToken(hashParams.access_token);
                const newUrl = window.location.href.split('#')[0];
                window.history.replaceState({}, document.title, newUrl);
            }
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("spotifyToken");
        setToken("");
    };

    return (
        <>
            <Head>
                <title>GROOVE</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <link rel="icon" href="/favicon.ico"/>

            </Head>
            <main className={styles.main}>
            <h1 className={styles.grooveHeader}>GROOVE</h1>
            <div className={styles.formContainer}>
            <form className={styles.form}>
                <label className={styles.label} for="username">Username</label>
                <input className={styles.input} type="text" id="username" name="username" />
                <label className={styles.label} for="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" />
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label className={styles.checkbox} for="rememberMe">Remember Me</label>
                </div>
                <div className={styles.spotifyContainer}>
                <Link className={styles.spotifyButton} href="/onboarding">
                    Login
                </Link>
                </div>
            </form>
            </div>
            </main>
        </>
    );
}
