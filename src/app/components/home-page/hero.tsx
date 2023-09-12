import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/user.jpg"
          alt="Image of the user"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ahtasham</h1>
      <p>
        I blog about web development - especially in frontend frameworks like
        React and NextJs.
      </p>
    </section>
  );
}
export default Hero;
