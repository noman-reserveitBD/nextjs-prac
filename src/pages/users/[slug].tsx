import axios from "axios";

interface IUser {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {};
    phone: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

function User(props: IUser) {
  console.log(props.data);

  return (
    <>
      <h1>User name: {props.data.name}</h1>
      <h1>User Phone: {props.data.phone}</h1>
      <p>asdfasd </p>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const uid = params.slug;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${uid}`
  );

  console.log(res);

  return {
    props: {
      data: res.data,
    },
  };
}

export default User;
