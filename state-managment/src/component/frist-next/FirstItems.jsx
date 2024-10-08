import { useContext } from "react";
import { QnaContext } from "../../context/Qna";

const FirstItems = () => {
  const contextData = useContext(QnaContext);
  let {firstNext, curretId, setCurrentId,} = contextData;
  return (
    <div>
      {
        firstNext.map(item => {
          return(
            <div className="faqsItems" key={item.id}>
              <h2 onClick={()=> setCurrentId(item.id)}>{item.question}</h2>
              <p className={curretId === item.id ? "activeAns" : ""}>{item.answer}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default FirstItems;
 