import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { aboutMeInfo } from "../content/AboutUs-content";
import style from "./aboutus.module.css";

const aboutus = () => {
  return (
    <div className="app">
      <Header />
        {aboutMeInfo.map((paragraph, index) => {
          return (
            <p className={style.paragraph} key={`aboutme-${index}`}>{paragraph}</p>
          )
        })}
      <Footer />
    </div>
  );
}

export default aboutus;