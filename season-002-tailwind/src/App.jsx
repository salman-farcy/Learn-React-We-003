
import { useState } from 'react';
import './App.css';
import Header from './Components/header/Header';
import barimImage from './image/images.jpeg';



function App() {
  let [incrige, setIncrige] = useState(0);
  let [dicrige, setDicrige] = useState(0);
  let [update, setUpdate] = useState(0);

  let template= "";
  //tarnarry oprators
  let [pdisplay, setPdisplay] = useState(false);

  //Conditional rendering using if elase
  if(pdisplay){
    template = <Card/>
  }else{
    template = ""
  }

    // const [value, setValue] = useState(0)
  let nm = 10;
  let dataShow = () => {
    nm = nm + 1;
    console.log(nm)
  }

  let addMyData = (data1, data2) => {
    alert(data1 + data2);
  }

  return (
    <div>
      <Header />
      {nm}
      <button onClick={() => addMyData(56, 34)} className='bg-green-700 py-3 px-5 mr-2'>Add data</button>
      <button onClick={dataShow} className='bg-red-600 py-3 px-5'>Save</button>
      <img src={barimImage} alt="" />
      <h1 className='bg-red-700 text-4xl text-green-700 font-bold'>welcome Bangladesh in my cuntery</h1>
      <div className='bg-green-50'>
        <p>{incrige}</p>
        <p>{dicrige}</p>
        <p>{update}</p>

        <button onClick={() => setIncrige(incrige + 1)} className='bg-blue-500 py-2 px-5'>Increment</button>

        <button onClick={() => setDicrige(dicrige - 1)} className='bg-blue-500 py-2 px-5'>Dicriment</button>

        <button onClick={()=> setUpdate(incrige + dicrige)} className='bg-blue-500 py-2 px-5'>Dicriment</button>
        {/* <button onClick={() => setValue(value + 1)} className='bg-blue-500 py-2 px-5'>Dicriment</button>
        <button onClick={() => setValue(value - 1)} className='bg-fuchsia-500 py-2 px-5'>Dicriment</button> */}
      </div>

      <div>
      <button onClick={() =>setPdisplay(!pdisplay)} className='bg-green-600 py-3 px-5'>{pdisplay ? <p>hide</p> : <p>show</p>}</button>
      {template}
      </div>
    </div>
  )
}

export default App;
 

let Card = () => {
  return(
    <h1>my cuntery in the best countery</h1>
  )
}