import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <div>Coffee Store {router.query.id}</div>
      <Link href={`/`}>Back to home</Link>
    </>
  );
};

export default CoffeeStore;
