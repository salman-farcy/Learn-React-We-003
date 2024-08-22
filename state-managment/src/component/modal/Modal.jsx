import { useState } from "react"


const Modal = () => {
  let [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div onClick={() => setShowModal(!showModal)} className={`modalOverlay ${showModal ? "showModalOverlay" : ''}`}></div>
      <div className={`modelDive ${showModal ? "showModelDive" : ''}`}>
        <h3>Enquiry Naw <button onClick={()=> setShowModal(!showModal)} className="ml-10">&times;</button></h3>
      </div>
        
      <button className="en" onClick={() => setShowModal(!showModal)}>Enquire Now</button>
    </div>
  )
}

export default Modal
