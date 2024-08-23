const FirstItems = ({ itemDetails }) => {

  let { itemsData, curretId, setCurrentId } = itemDetails;
  return (
    <div className="faqsItems">
      <h2 onClick={()=> setCurrentId(itemsData.id)}>{itemsData.question}</h2>
      <p className={curretId === itemsData.id ? "activeAns" : ""}>
        {itemsData.answer}
      </p>
    </div>
  );
};

export default FirstItems;
 