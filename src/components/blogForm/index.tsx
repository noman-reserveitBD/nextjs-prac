import { useRef } from "react";

import classes from "./style.module.css";

interface BlogData {
  blogName?: string;
  useName?: string;
  description?: string;
}

interface FormData {
  onAddBlog: (blogData: BlogData) => {};
}

const BlogForm = ({ onAddBlog }: FormData) => {
  const name = useRef<HTMLInputElement | null>(null);
  const userName = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const blogName = name?.current?.value;
    const useName = userName?.current?.value;
    const desc = description?.current?.value;

    const blogData: BlogData = {
      blogName: blogName,
      useName,
      description: desc,
    };

    onAddBlog(blogData);
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input placeholder="Blog name" className={classes.input} ref={name} />
        <input
          placeholder="user name"
          className={classes.input}
          ref={userName}
        />
        <textarea
          ref={description}
          rows={5}
          cols={50}
          placeholder="Blog post"
          className={classes.input}
        />
        <button className={classes.button} type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;
