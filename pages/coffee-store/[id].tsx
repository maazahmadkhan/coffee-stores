import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { CoffeeStore } from "..";
import coffessStores from "../../data/coffee-stores.json";

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
  console.log(props.coffeeStore?.name);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // destructure props after router.isFallback check
  const { coffeeStore } = props;
  const { address, id, imgUrl, name, neighbourhood, websiteUrl } =
    coffeeStore || {};
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href={"/"}>Back to home</Link>
      <div>Coffee Store {router.query.id}</div>
    </div>
  );
};

export default CoffeeStore;
