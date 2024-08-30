import { useState } from "react"
import { FaEyeSlash, FaRegEye } from "react-icons/fa";



function App() {
let [showPassword, setShowPassword] = useState(false)
let [uname, setUname] = useState('');
let [password, setPassword] = useState('');

const handelSubmite = (e) =>{
  e.preventDefault()
  console.log(uname, password)
}

  return (
    <div>
      <div className="">
        <div className="">
          <form onSubmit={handelSubmite}>
             <div className="">
              <label>UserName</label>
              <input type="text" onChange={(e) => setUname(e.target.value)} value={uname} />
             </div>
             <div className="">
              <label>Password</label>
              <input type={`${showPassword ? "text" : "password"}`}  onChange={(e) => setPassword(e.target.value)} value={password} />
              <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye /> : <FaEyeSlash />}</button>
              
              
             </div>

             <div className="">
              <button className="bg-red-200 py-2 px-5 rounded-md">Login</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
