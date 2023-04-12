import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "../../service/axiosInstance";

const Blog = () => {
  const [data, setData] = useState([]);
  const dataa = [
    { id: 1, name: "blog one" },
    {
      id: 2,
      name: "blog two",
    },
    { id: 3, name: "blog three" },
  ];

  async function name() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   })
    //   .catch((err) => console.log("something is wrong" + err));

    const response = await axiosInstance.get("/posts");
    console.log(response);
    return response.data;
  }

  useEffect(() => {
    (async () => {
      await name();
    })();
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      <h1>Blogs Page</h1>
      {/* <ul>
        {data?.map((data) => (
          <Link href={`blog/${encodeURIComponent(data.id)}`} key={data.id}>
            {data.name}
          </Link>
        ))}
      </ul> */}
    </React.Fragment>
  );
};

export async function getStaticProps() {
  // api call

  // console.log("call first....");
  console.log(process.env.url);
  return {
    props: {
      data: [{ id: 3 }, { id: 4 }],
    },
  };
}

export default Blog;
