import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

function useToken() {
    const router = useRouter();
    const [token, setToken] = useState("");

    useEffect(() => {
        const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
            const parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        const accessTokenFromCookie = Cookies.get('accessToken');
        if (hashParams.access_token) {
            setToken(hashParams.access_token);
            Cookies.set('accessToken', hashParams.access_token);
            router.replace(router.asPath.split('#')[0]);
        } else if (accessTokenFromCookie) {
            setToken(accessTokenFromCookie);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('accessToken');
        setToken("");
        router.push('/');
    };

    return { token, handleLogout };
}

export default useToken;
