import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>Hello World </h1>
      <Link href="./portfolio">Portfolio</Link>
      <br />
      <Link href="./clients">Clients</Link>
    </>
  );
};

export default Home;
