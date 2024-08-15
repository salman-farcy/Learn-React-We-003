import "./App.css";

function App() {
  let name = "salman faycy";
  let l = [10, 20, 30, 40];
  let obj = {
    "name": "salmna",
    "age": 34,
    "class": "10"
  }
  let status = true;
  return (
    <div className="main">
      <h1>{name}</h1>
      <div >
        {l.map((v) => {
          return <div >{v}</div>;
        })}
      </div>
      {
      status 
      ?
      <h1 style={{color:"red", backgroundColor:"yellow"}}>salman farcy</h1>
      :
      ''
      }
      
    </div>
  );
}

export default App;
