import Link from "next/link";
import Image from "next/image";
import style from "./styles/blurb.module.css";
import birth from "../images/birth.png"
import postpartum from "../images/postpartum.png";

type BlurbProps = {
  link: string;
  image: string;
  text: string;
  altText: string;
}

const Blurb: React.FC<BlurbProps> =   ({link, image, altText, text}) => {
  let photo = birth;

  if (image === "post") {
    photo = postpartum
  }
  return (
    <Link href={link} passHref legacyBehavior>
      <div className={style.blurb}>
        <Image src={photo} alt={altText} className={style.blurbimage} width={0} height={0} />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default Blurb;