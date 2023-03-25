import Link from "next/link";
import classes from "./style.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link href={"/"} className={classes.link}>
          <h4 className={classes.item}>Home</h4>
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
      </header>
    </>
  );
}

export default Header;
