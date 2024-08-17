import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  let headerInfo ={
    email: "salmanfarcy@gmail.com",
    phone: "01602695577",
    name: "salman farcy",
    age: 24,
    biodata: {
      address: "dhaka, md pur 1207"
    }
  }
  return (
   <div>
    <Header headerInfo={headerInfo} />
    
    <Footer />
   </div>
  );
}

export default App;



