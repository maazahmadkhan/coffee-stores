import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../store/store-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

//Responsible for <body></body> only. Not for <head></head>
