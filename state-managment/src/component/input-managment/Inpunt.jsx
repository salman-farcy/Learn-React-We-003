
import { useState } from "react";

const Inpunt = () => {
    let [pstatus, setPstatus] = useState(true);

  return (
    <div>
      <input type={pstatus ? "password": "text"} className="border border-blue-600"/> <button onClick={() => setPstatus(!pstatus)}>{pstatus ? "Show" : "Hide"}</button>
    </div>
  )
}

export default Inpunt;
