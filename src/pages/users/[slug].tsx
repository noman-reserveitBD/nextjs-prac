function User() {
  return (
    <>
      <h1>Single user..</h1>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const uid = params.slug;
  console.log(uid);

  return {
    props: {
      user: "user one",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: "1" },
      },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
    ],
    fallback: false,
  };
}

export default User;
