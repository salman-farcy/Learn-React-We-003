import { useState } from "react";
import "./App.css";
import btnModuleCss from "./component/Btn-module/Button.module.css";
import Header from "./component/header/Header";
import Inpunt from "./component/input-managment/inpunt";
import Nav from "./component/header/Nav";
import Modal from "./component/modal/Modal";
import FristNext from "./component/frist-next/FristNext";
import { QnaProvider } from "./context/Qna";

// import Faqs from "./component/faq/Faqs";

function App() {
  let [status, setStatus] = useState(true);

  // let [menuStatus, setMenuStatus] = useState(false)

  
  return (
    <>
      <Nav />
      <Modal />
      <Inpunt />
      {status ? <Header /> : ""}
      <button
        onClick={() => setStatus(!status)}
        className="bg-blue-400 py-3 px-7"
      >
        {status ? <p>Header Hide</p> : <p>Header show</p>}
      </button>

      <h1 className="bg-green-600">salman farcy the greate</h1>

      <div>
        <button className={btnModuleCss.error}>Error</button>
      </div>

      {/* <Faqs /> */}
      <QnaProvider>
        <FristNext />
      </QnaProvider>
      
    </>
  );
}

export default App;
