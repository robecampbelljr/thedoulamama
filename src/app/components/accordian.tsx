'use client'
import { useState, useEffect } from 'react';

type AccordianProps = {
  id: string;
  question: string;
  answer: Object;
  state?: boolean;
};

const Accordian: React.FC<AccordianProps> =  ({id, question, answer, state}) => {

  let [expand, setExpand] = useState(state || false);

  useEffect(() => {
    if (`#${id}` === window.location.hash) {
      setExpand(true);
    }
  }, [id]);

  const toggleAccordion = () => {
    setExpand(!expand);
  };
  return (
    <div key={id} id={id} className="accordian" onClick={() => {toggleAccordion()}}>
        <h3 className="carrot">{!expand ? ">" : "v"}</h3>
        <h3 className="question">{question}</h3>
        {/* Need to customize the answer using the answer orbject coming from the Faq-content.tsx */}
      {expand ? <p>Answer Goes Here</p> : null}
    </div>
  )
}

export default Accordian;