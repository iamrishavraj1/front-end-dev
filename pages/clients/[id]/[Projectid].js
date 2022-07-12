import { useRouter } from "next/router";
const SingleClientProject = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Hello Specific Project</h1>
    </>
  );
};

export default SingleClientProject;
