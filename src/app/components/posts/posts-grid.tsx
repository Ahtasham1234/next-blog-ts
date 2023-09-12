import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

export default function PostsGrid(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          image={post.image}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          key={post.slug}
        />
      ))}
    </ul>
  );
}
