import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

export default function PostItem(props: {
  title: string;
  image: string;
  date: string;
  slug: string;
  excerpt: string;
}) {
  const { title, image, date, slug, excerpt } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            priority
            alt={title}
            width={300}
            height={200}
          />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{humanReadableDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
