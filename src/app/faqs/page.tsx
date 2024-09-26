import Header from "../components/header";
import Footer from "../components/footer";
import { birthfaqs, postpartumfaqs, lactationfaqs } from "../content/Faq-content";
import Accordian from "../components/accordian";

export default function faqs() {

  return (
    <div className="app">
      <Header />
      <h1>{birthfaqs.service}</h1>
      {birthfaqs.faqs.map(({question, answer, reference}) => {
        {/* break up the answer object, validate the paragraphs, list, and reference(done). Double check for more validations
          * Send info to accordian */}
        let validReference = reference != ``;
        return (
          <></>
        )
      })}
      <Footer />
    </div>
  );
}

