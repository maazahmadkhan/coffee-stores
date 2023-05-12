import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, PropsWithChildren } from "react";

const initialState = {
  latLong: "",
  coffeeStores: [],
};

const StoreContext = createContext({ state: initialState });

const StoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <StoreContext.Provider value={{ state: initialState }}>
      {children}
    </StoreContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

//Responsible for <body></body> only. Not for <head></head>
