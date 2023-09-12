import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CustomImageProps = {
  src: string;
  alt: string;
};

export default function PostContent(props: { post: Post }) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => (
    <Image
      src={`/images/posts/${post.slug}/${src}`}
      alt={alt}
      width={600}
      height={300}
      // style={{ width: "100%", height: "auto" }}
    />
  );

  const customComponents = {
    img: CustomImage,
    // code({ value, language }: { value: string; language: string }) {
    //   return (
    //     <SyntaxHighlighter language={language} style={dark} children={value} />
    //   );
    // },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents as any}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
