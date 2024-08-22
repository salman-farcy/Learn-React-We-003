import { useState } from "react";

const Nav = () => {
  let [menuStatus, setMenuStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setMenuStatus(!menuStatus)} className="micon">
        {menuStatus ?<span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
