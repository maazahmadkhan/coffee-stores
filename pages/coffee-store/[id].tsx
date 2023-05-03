import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { CoffeeStore } from "..";
import coffessStores from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
interface CoffeeStoreParams extends ParsedUrlQuery {
  id: string;
}

export type CoffeeStoreStaticProps = {
  coffeeStore: CoffeeStore | undefined;
};

export const getStaticProps: GetStaticProps<
  CoffeeStoreStaticProps,
  CoffeeStoreParams
> = (staticProps) => {
  const { params } = staticProps;
  return {
    props: {
      coffeeStore: coffessStores?.find(
        (coffeeStore) => String(coffeeStore.id) === params?.id
      ),
    },
  };
};

export const getStaticPaths: GetStaticPaths<CoffeeStoreParams> = () => {
  const paths = coffessStores.map((coffeStore) => {
    return {
      params: { id: String(coffeStore.id) },
    };
  });
  return {
    paths,
    //fall back true will render for unspecified paths while fallback false returns 404 page
    fallback: false,
  };
};

type CoffeeStoreProps = CoffeeStoreStaticProps & {};

const CoffeeStore = (props: CoffeeStoreProps): JSX.Element => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // destructure props after router.isFallback check
  const { coffeeStore } = props;
  const { address, name, neighbourhood, imgUrl } = coffeeStore || {};
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href={"/"}>Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={name || ""}
              width={600}
              height={360}
              className={styles.storeImg}
            />
          ) : null}
        </div>
        <div className={styles.col2}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
