import React, { createContext, useState, useContext } from 'react';

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <SpotifyContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotify = () => useContext(SpotifyContext);

function App({ Component, pageProps }) {
  return (
    <SpotifyProvider>
      <Component {...pageProps} />
    </SpotifyProvider>
  );
}

export default App;
