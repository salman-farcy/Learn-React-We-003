import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="bg-gray-600">
      <nav className="py-4 w-3/4 mx-auto">
         <ul className="flex justify-center gap-5 text-green-600 font-bold">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/corce"}>Cource</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
         </ul>
      </nav>
    </div>
  )
}

export default Header
