import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload" //top download priority
          as="font" //used when rel="preload" | sets the necessary font header
          crossOrigin="anonymous" //no credentials needed
          href="/fonts/IBMPlexSans-Bold.ttf"
        />
        <link
          rel="preload" //top download priority
          as="font" //used when rel="preload" | sets the necessary font header
          crossOrigin="anonymous" //no credentials needed
          href="/fonts/IBMPlexSans-Regular.ttf"
        />
        <link
          rel="preload" //top download priority
          as="font" //used when rel="preload" | sets the necessary font header
          crossOrigin="anonymous" //no credentials needed
          href="/fonts/IBMPlexSans-SemiBold.ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
