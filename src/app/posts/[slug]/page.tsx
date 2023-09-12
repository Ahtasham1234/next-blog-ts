import PostContent from "@/app/components/posts/post-detail/post-content";
import { getPostData } from "../../../../lib/posts-util";

function PostDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostData(slug);
  return <PostContent post={post} />;
}
export default PostDetailPage;
