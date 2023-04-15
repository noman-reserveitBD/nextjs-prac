import React, { useRef } from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async () => {
    // console.log(email.current, password.current);

    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="ml-auto mr-auto bg-sky-900 w-2/5 h-96 mt-7">
      <div className="flex items-center justify-center gap-2 p-10">
        <h5 className="text-cyan-50">User name : </h5>
        <input
          type="text"
          placeholder="Enter user name"
          onChange={(e) => (email.current = e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <h5 className="text-cyan-50">Password : </h5>
        <input
          type="text"
          placeholder="Enter Password"
          onChange={(e) => (password.current = e.target.value)}
        />
      </div>
      <div className="flex items-start justify-center gap-2 ">
        <button
          className="mt-6 text-black bg-white p-3 rounded-md"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <button className="mt-6 text-black bg-white p-3 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
