import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/banner/banner.component";
import { Card } from "../components/card/card.component";
import styles from "../styles/Home.module.css";
import coffeeStoresData from "../data/coffee-stores.json";
import { AppContext } from "next/app";

export type CoffeeStore = typeof coffeeStoresData[number];

export const getStaticProps = () => {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
};

interface HomeProps {
  coffeeStores: CoffeeStore[];
}

export default function Home(props: Readonly<HomeProps>): JSX.Element {
  const { coffeeStores } = props;
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
          buttonText="View stores nearby"
        />
        <div className={styles.heroImage}>
          <Image
            src={"/static/hero-image.png"}
            alt="Hero Image"
            width={700}
            height={400}
          />
        </div>
        {coffeeStores?.length > 0 ? (
          <>
            <div className={styles.heading2}>Toronto Stores</div>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                const { id, address, imgUrl, name, neighbourhood, websiteUrl } =
                  coffeeStore;
                return (
                  <Card
                    key={id}
                    imgUrl={imgUrl}
                    name={name}
                    href={`/coffee-store/${id}`}
                  />
                );
              })}
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}
