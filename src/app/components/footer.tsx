import fblogo from '../images/fblogo.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/footer.module.css';

const Footer = () => {

  return (
    <>
    <footer className={styles.footer}>
        <section className={styles.address}>
          <Link href="/contact" passHref legacyBehavior>
            <h3 className="pointer">Contact us:</h3>
          </Link>
          <h4>The Doula Mama</h4>
          Email: email@goeshere.com<br></br>
          Phone: +208-922-7289<br></br>
          Location: Kuna, ID
        </section>
        <section className={styles.faqsection}>
          <Link href="/faqs" passHref legacyBehavior><h3 className="pointer">FAQs:</h3></Link>
          {/* <Link href="/faqs#" passHref legacyBehavior></Link><br></br>
          <Link href="/faqs#" passHref legacyBehavior></Link><br></br>
          <Link href="/faqs#" passHref legacyBehavior></Link><br></br>
          <Link href="/faqs#" passHref legacyBehavior></Link><br></br> */}
        </section>
        <section className={styles.socialmedia}>
          <h3>Social Media:</h3>
          <section className={styles.socialicons}>
            <a href="https://www.facebook.com" target="_blank"><Image src={fblogo} height={50} width={50} alt="Facebook Logo"></Image></a>
          </section>
        </section>
      </footer>
      <section className={styles.copyrite}>&copy; TheDoulaMama.com</section>
    </>
  )
}
export default Footer;