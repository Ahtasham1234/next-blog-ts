import FeaturedPosts from "./components/home-page/featured-posts";
import Hero from "./components/home-page/hero";
import { getFeaturedPosts } from "../../lib/posts-util";
const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a framework for production - Its makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-06-09",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a framework for production - Its makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-06-09",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a framework for production - Its makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-06-09",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a framework for production - Its makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-06-09",
  },
];

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
