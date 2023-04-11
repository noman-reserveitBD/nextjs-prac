import Link from "next/link";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
}
interface IUsers {
  users: IUser[];
}

function Users({ users }: IUsers) {
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <h1>User Information.</h1>
      {users.map((d) => {
        return (
          <div>
            <Link href={`/users/${d.id}`}>
              <h1>{d.name}</h1>;
            </Link>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log(process.env.url);
  return {
    props: {
      users: res.data,
    },
  };
}

export default Users;
