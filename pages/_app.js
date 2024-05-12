import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSessionToken } from '../utils/auth';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = getSessionToken();
    if (!token && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;
