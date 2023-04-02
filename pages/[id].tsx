import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const CoffeeStore = (props: any): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <div>Coffee Store {router.query.id}</div>
    </>
  );
};

export default CoffeeStore;
