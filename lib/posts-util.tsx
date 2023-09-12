import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

interface PostData {
  slug: string;
  title: string;
  date: string;
  isFeatured: boolean;
  content: string;
  image: string;
  excerpt: string;
}

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: PostData = {
    slug: postSlug,
    title: data.title, // Add title property
    date: data.date, // Add date property
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured, // Add isFeatured property
    content,
  };

  return postData;
}

export function getAllPosts(): PostData[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts(): PostData[] {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
