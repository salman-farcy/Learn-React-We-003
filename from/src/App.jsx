import { useState } from "react";
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

  // The value from the input box is obtained through this function
  let getValue = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  // data Submite
  let handleSubmit = (e) => {
    e.preventDefault();
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    let checkFilterUser = userData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone);

    if (checkFilterUser.length == 1) {
      alert("alrady exist data");
    } 
    else {
      let oldAndNewData = [...userData, currentUserFormdata];
      setUserData(oldAndNewData);
      setFormData({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: "",
      });
    }
  };

  return (
    <div>
      <div className="w-[1200px] mx-auto flex justify-between">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label>Name</label>
              <input
                onChange={getValue}
                type="text"
                name="uname"
                value={formData.uname}
                required
                className="border-2 border-black"
              />
            </div>

            <div className="">
              <label>Email</label>
              <input
                required
                onChange={getValue}
                type="text"
                name="uemail"
                value={formData.uemail}
                className="border-2 border-black"
              />
            </div>

            <div className="">
              <label>Phone</label>
              <input
                required
                onChange={getValue}
                type="text"
                name="uphone"
                value={formData.uphone}
                className="border-2 border-black"
              />
            </div>

            <div className="">
              <label>Message</label>
              <textarea
                required
                onChange={getValue}
                name="umessage"
                value={formData.umessage}
                id=""
                rows="3"
                className="border-2 border-black"
              ></textarea>
            </div>
            <div className="">
              <button className="bg-red-200 py-2 px-5 rounded-md">
                {formData.index == "" ? "Submit" : "Update"}
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <table className="border-2">
            <thead className="border-2">
              <tr>
                <th className="border-2">Id</th>
                <th className="border-2">Email</th>
                <th className="border-2">Name</th>
                <th className="border-2">Phone</th>
                <th className="border-2">Message</th>
                <th className="border-2">Action</th>
              </tr>
            </thead>
            {userData.length >= 1 ? (
              <tbody>
                {[...userData].reverse().map((data, i) => {
                  return (
                    <tr key={i} className="border-2">
                      <td className="border-2">{i + 1}</td>
                      <td className="border-2">{data.uname}</td>
                      <td className="border-2">{data.uemail}</td>
                      <td className="border-2">{data.uphone}</td>
                      <td className="border-2">{data.umessage}</td>
                      <td className="border-2">
                        <button className="bg-red-200 px-4 py-1 mr-2">
                          Delet
                        </button>
                        <button className="bg-blue-200 px-4 py-1">Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              "data not found"
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
