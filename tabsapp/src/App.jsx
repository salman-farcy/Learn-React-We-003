import { useState } from "react";
import { tabDatas } from "./Data/tabData";

function App() {
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContante, setActiveComtante] = useState(tabDatas[0]);

  let changeData = (index) => {
    setActiveTabs(index)
    setActiveComtante(tabDatas[index])
  };
  return (
    <div>
      <div className="w-3/4 mx-auto bg-slate-400">
        <h1 className="text-4xl text-center">
          Law Prep Vision Mission and Values
        </h1>

        <ul className="flex gap-2">
          {tabDatas.map((tabsItems, index) => {
            return (
              <li key={index}>
                <button
                  onMouseOver={() => changeData(index)}
                //  onClick={() => changeData(index)}
                  className={activeTabs == index ? "bg-red-300 px-4 py-2 cursor-pointer" : "bg-gray-200 px-4 py-2 cursor-pointer"}
                >
                  {tabsItems.title}
                </button>
              </li>
            );
          })}
        </ul>
        {activeContante !== undefined ? (
          <p>{activeContante.description}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
