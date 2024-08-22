import { useState } from "react";
import { faqsData } from "./FaqsData";

const Faqs = () => {
  let [showAns, setShowAns] = useState(faqsData[0].id);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        Frequently Asked Questions (FAQs)
      </h1>

      <div className="faqOuter">
        {faqsData.map((faqitem, index) => {
          return (
            <div className="faqsItems" key={index}>
              <h2 onClick={()=> setShowAns(faqitem.id)}>{faqitem.question}</h2>
              <p className={showAns === faqitem.id ? "activeAns" : ""}>{faqitem.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
