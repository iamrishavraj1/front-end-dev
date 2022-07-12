import { useRouter } from "next/router";
const Blog = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Hello Blog</h1>
    </>
  );
};

export default Blog;
