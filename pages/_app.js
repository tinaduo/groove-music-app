import "@/styles/globals.css";
import { TokenProvider } from "./TokenContext";

export default function App({ Component, pageProps }) {
  return <TokenProvider>
      <Component {...pageProps} />
    </TokenProvider>;
}
