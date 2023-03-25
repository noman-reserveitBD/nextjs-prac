import Link from "next/link";
import {LS} from "../../utils/localstorage" 

interface IUser {
  id: number;
  name: string;
}
interface IUsers {
  users: IUser[];
}

function Users({ users }: IUsers) {
  // console.log(users);
  LS.setValue("my key", 12345)
  LS.getValue("my key")


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
  if (typeof window !== 'undefined') {
    // You now have access to `window`
    window.localStorage.setItem("hi2", "hollo world !")
  }
  

  return {
    props: {
      users: [
        { id: 1, name: "user one" },
        { id: 2, name: "user two" },
        { id: 3, name: "user three" },
      ],
    },
  };
}

export default Users;
