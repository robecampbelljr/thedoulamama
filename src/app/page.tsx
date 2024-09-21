import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Blurb from "./components/blurb";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <section className={styles.infosection}>
        <p>Hi! I’m Erica, a certified birth and postpartum doula, lactation counselor, and mama of four residing in Treasure Valley, Idaho. I have a passion for all things birth, breastfeeding, and babies! Shortly after the birth of my third child in 2020, I felt a strong calling to birthwork and began the certification process. Over the last few years I have found incredible fulfillment in helping my fellow mamas on their pregnancy, birth, and postpartum journeys. <a href="/about-us">Read More...</a></p>
      </section>
      <section className={styles.blurbsection}>
        <Blurb link="/services" image="birth" altText="Birth Doula" text="Birth Doula Support" />
        <Blurb link="/services" image="post" altText="Birth Doula" text="Post Partum Support" />
        <Blurb link="/services" image="birth" altText="Birth Doula" text="Lactation Support" />
      </section>
      <Footer />
    </div>
  );
}