import React from "react";
import Link from "next/link";

const Blog = () => {
  const data = [
    { id: 1, name: "blog one" },
    {
      id: 2,
      name: "blog two",
    },
    { id: 3, name: "blog three" },
  ];

  return (
    <React.Fragment>
      <h1>Blogs Page</h1>
      <ul>
        {data?.map((data) => (
          <Link href={`blog/${encodeURIComponent(data.id)}`} key={data.id}>
            {data.name}
          </Link>
        ))}
      </ul>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  // api call

  console.log("call first....");
  return {
    props: {
      data: [{ id: 3 }, { id: 4 }],
    },
  };
}

export default Blog;
