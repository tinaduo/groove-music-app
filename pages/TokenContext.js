import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const accessTokenFromCookie = Cookies.get('accessToken');
        if (accessTokenFromCookie) {
            setToken(accessTokenFromCookie);
        }
    }, []);

    const handleSetToken = (newToken) => {
        setToken(newToken);
        Cookies.set('accessToken', newToken);
    };

    const handleRemoveToken = () => {
        setToken('');
        Cookies.remove('accessToken');
    };

    return (
        <TokenContext.Provider value={{ token, setToken: handleSetToken, removeToken: handleRemoveToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenContext;
