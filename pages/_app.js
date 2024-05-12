import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
            const parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        if (hashParams.access_token) {
            sessionStorage.setItem("spotifyToken", hashParams.access_token);
        } else {
            const storedToken = sessionStorage.getItem("spotifyToken");
            if (!storedToken && router.pathname !== '/index') {
                router.push('/index');
            }
        }
    }, []);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
