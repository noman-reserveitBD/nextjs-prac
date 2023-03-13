import BlogForm from "@/components/blogForm";

interface BlogData {
  blogName?: string;
  useName?: string;
  description?: string;
}

function BlogPost() {
  const onAddBlog = (data: BlogData): {} => {
    console.log(data);
    return data;
  };

  return (
    <>
      <h1>Blog post..</h1>
      <BlogForm onAddBlog={onAddBlog} />
    </>
  );
}

export default BlogPost;
