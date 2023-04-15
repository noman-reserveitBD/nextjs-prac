import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "./style.module.css";

function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header
      className={`flex flex-row justify-between items-center flex-1 bg-slate-400 p-6`}
    >
      <div className={`flex`}>
        <Link href={"/"} className={classes.link}>
          <h4 className={`${classes.item}`}>Home</h4>
        </Link>
        <Link href={"/blog"} className={classes.link}>
          <h4 className={classes.item}>Blogs</h4>
        </Link>
        <Link href={"/blog-post"} className={classes.link}>
          <h4 className={classes.item}>Create blogs</h4>
        </Link>
        <Link href={"/users"} className={classes.link}>
          <h4 className={classes.item}>Users</h4>
        </Link>
      </div>
      <div className={``}>
        {session?.user ? (
          <>
            <p>{session.user.name}</p>
            <button
              className="bg-zinc-800 text-cyan-50 p-3 w-32 rounded-md"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href="/signin">
            <button
              className="bg-zinc-800 text-cyan-50 p-3 w-32 rounded-md mr-4"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
