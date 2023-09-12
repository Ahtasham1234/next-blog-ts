import { getAllPosts } from "../../../../lib/posts-util";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

export default function AllPosts() {
  const allPosts = getAllPosts();
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={allPosts} />
    </section>
  );
}
