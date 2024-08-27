import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);


  let saveToDoList = (e) => {
    let toname = e.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalTodoList = [...todolist, toname];
      setTodolist(finalTodoList);
    } else {
      alert("allrady Exjist");
    }

    e.preventDefault();
  };


  let deletLi = (index) =>{
    let finalData = todolist.filter((v, i) => i != index);
    setTodolist(finalData)
  }


  return (
    <div className="w-[1200px] mx-auto bg-slate-100 py-5 rounded-md mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-400">
        Todo List
      </h1>
      <form
        onSubmit={saveToDoList}
        className="w-[800px] mx-auto text-cente mt-10 flex justify-center gap-2"
      >
        <input
          className="basis-9/12 p-3 rounded-md border-2 focus:border-red-100 focus:outline-none"
          type="text"
          name="toname"
          id=""
          placeholder="Write yours ToDo list"
        />
        <button className="basis-3/12 bg-red-100 py-2 px-5  rounded-md border-2 text-gray-400">
          save
        </button>
      </form>

      <ul className="w-full justify-center items-center">
        {todolist.map((todo, index) => {
          return (
            <div
              key={index}
              className="w-[800px] mx-auto text-cente mt-3 flex justify-center items-center gap-2 h-10 px-3 rounded-md border-2 bg-red-100"
            >
              <li className="w-full font-semibold text-gray-500 overflow-hidden flex-nowrap">{index + 1}.{todo}</li>
              <span onClick={() => deletLi(index)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xl">
                &times;
              </span>
            </div>
          );
        })}
      </ul>
    </div>  
  );
}

export default App;
