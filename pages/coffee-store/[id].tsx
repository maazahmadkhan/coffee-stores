import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
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
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "300" } },
    ],
    fallback: false,
  };
};

type CoffeeStoreProps = CoffeeStoreStaticProps & {};

const CoffeeStore = (props: CoffeeStoreProps): JSX.Element => {
  const router = useRouter();
  console.log(props.coffeeStore?.name);
  return (
    <>
      <div>Coffee Store {router.query.id}</div>
      <Link href={`/`}>Back to home</Link>
    </>
  );
};

export default CoffeeStore;
