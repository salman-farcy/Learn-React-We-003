
import './App.css';
import Header from './Components/header/Header';
import weblogo from "./image/images.jpeg"

function App() {
  

  return (
    <div>
      <Header />
      <img src={weblogo} height={200} width={200} alt="this is my photo" />
      <h1 className='bg-red-700 text-4xl text-green-700 font-bold'>welcome Bangladesh in my cuntery</h1>
    </div>
  )
}

export default App;
 