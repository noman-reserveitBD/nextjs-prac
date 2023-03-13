import { useRouter } from "next/router";

const Details = () => {
  const { query } = useRouter();
  const id = query.id;
  console.log(id);

  return (
    <>
      <h2>Blog details page</h2>
      <h1>{id} Number blog.</h1>
    </>
  );
};

export default Details;
