import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { CoffeeStore } from "..";
import coffessStores from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";
import { useContext, useEffect } from "react";
import { ActionTypes, StoreContext } from "../../store/store-context";
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
  //call externals api here and find from result set
  //internal apis (next apis) are not available here since they are not running at build time

  const coffeeStore = coffessStores?.find(
    (coffeeStore) => String(coffeeStore.id) === params?.id
  );
  return {
    props: {
      coffeeStore: coffeeStore || {
        address: "",
        id: "",
        imgUrl: "",
        name: "",
        neighbourhood: "",
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<CoffeeStoreParams> = () => {
  //call api here
  const paths = coffessStores.map((coffeStore) => {
    return {
      params: { id: String(coffeStore.id) },
    };
  });
  return {
    paths,
    //fall back true will render for unspecified paths while fallback false returns 404 page
    fallback: true,
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

  const handleUpvoteButton = () => {};
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_LAT_LONG,
      payload: { latLong: "sd" },
    });
  }, []);
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href={"/"}>← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={name || ""}
              height={"360"}
              width={"600"}
              className={styles.storeImg}
            />
          ) : null}
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              height={"24"}
              width="24"
              alt="places"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              height={"24"}
              width="24"
              alt="nearMe"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              height={"24"}
              width="24"
              alt="star"
            />
            <p className={styles.text}>{"1"}</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
