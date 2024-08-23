import { useState } from "react";
import { firstNext } from "../../data/Data";
import FirstItems from "./FirstItems";

const FristNext = () => {
  let [curretId, setCurrentId] = useState(firstNext[0].id);

  let items = firstNext.map((itemsData, index) => {
    let itemDetails = {
      itemsData,
      curretId,
      setCurrentId
    };
    return <FirstItems itemDetails={itemDetails} key={index} />;
  });

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        Frequently Asked Questions (FAQs)
      </h1>

      <div className="faqOuter">{items}</div>
    </div>
  );
};

export default FristNext;
