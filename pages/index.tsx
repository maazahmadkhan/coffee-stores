import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/banner/banner.component";
import { Card } from "../components/card/card.component";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Find coffee stores near you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          handleOnClick={() => {
            console.log("hi");
          }}
          buttonText="View coffee stores nearby!"
        />
        <div className={styles.heroImage}>
          <Image
            src={"/static/hero-image.png"}
            alt="Hero Image"
            width={700}
            height={400}
          />
        </div>
        <div className={styles.cardLayout}>
          <Card
            name="DarkHorse Coffee"
            href="/"
            className={styles.card}
            imgUrl="/coffee-store/darkhorse-coffee"
          />
          <Card
            name="DarkHorse Coffee"
            href="/"
            className={styles.card}
            imgUrl="/coffee-store/darkhorse-coffee"
          />
        </div>
      </main>
    </>
  );
}
