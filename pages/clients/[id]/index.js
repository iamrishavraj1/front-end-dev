import { useRouter } from "next/router";
const SingleClient = () => {
  const router = useRouter();
  console.log(router.query);
  const btnHandleer = () => {
    router.push("/clients/rishav/helloWorld2200");
    //We can use Object also like pathName: ../[]
  };
  return (
    <>
      <h1>Hello Single Client</h1>
      <button onClick={btnHandleer}>Go to Project</button>
    </>
  );
};

export default SingleClient;
