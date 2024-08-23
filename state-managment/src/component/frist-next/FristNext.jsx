import { useContext } from "react";
import FirstItems from "./FirstItems";
import { QnaContext } from "../../context/Qna";

const FristNext = () => {
  const contextData = useContext(QnaContext);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        Frequently Asked Questions (FAQs): {contextData.firstNext.length}
      </h1>

      <div className="faqOuter">
        <FirstItems />
      </div>
    </div>
  );
};

export default FristNext;
