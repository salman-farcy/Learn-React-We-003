
import './App.css';
import Header from './Components/header/Header';
import barimImage from './image/images.jpeg';

function App() {
  let dataShow = () => {
    alert("welcome to bangladesh")
  }

  let addMyData = (data1, data2) => {
    alert(data1 + data2);
  }

  return (
    <div>
      <Header />
      <button onClick={() => addMyData(56, 34)} className='bg-green-700 py-3 px-5 mr-2'>Add data</button>
      <button onClick={dataShow} className='bg-red-600 py-3 px-5'>Save</button>
      <img src={barimImage} alt="" />
      <h1 className='bg-red-700 text-4xl text-green-700 font-bold'>welcome Bangladesh in my cuntery</h1>
    </div>
  )
}

export default App;
 