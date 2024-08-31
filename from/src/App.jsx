import { useState } from "react"
// import { FaEyeSlash, FaRegEye } from "react-icons/fa";



function App() {
  const [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });
  const [userData, setUserData] = useState([]);

  let getValue = (e) => {
    let oldData = {...formData}
    let inputName = e.target.name;
    let inputValue = e.target.value;
   oldData[inputName] = inputValue
   setFormData(oldData)
  };

  let handleSubmit = (e) => {
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    }
    let oldData = [...userData, currentUserFormdata]
    setUserData(oldData)
    e.preventDefault();
  }

  return (
    <div>
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit}>
             <div className="">
              <label>Name</label>
              <input onChange={getValue} type="text" name="uname" value={formData.uname} className="border-2 border-black" />
             </div>

             <div className="">
              <label>Email</label>
              <input onChange={getValue} type="text" name="uemail" value={formData.uemail}  className="border-2 border-black" />
             </div>

             <div className="">
              <label>Phone</label>
              <input onChange={getValue} type="text" name="uphone" value={formData.uphone} className="border-2 border-black" />
             </div>

            <div className="">
              <label>Message</label>
              <textarea onChange={getValue} name="umessage" value={formData.umessage} id="" rows="3" className="border-2 border-black"></textarea>
            </div>
             <div className="">
              <button className="bg-red-200 py-2 px-5 rounded-md">
                {
                  formData.index == "" ? "Submit" : "Update"
                }
              </button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
