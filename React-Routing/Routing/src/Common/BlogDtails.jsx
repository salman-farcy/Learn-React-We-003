import { useLocation, useParams, useSearchParams } from "react-router-dom"
import Header from "./Header"
import { bologes } from "../Data/bologes";




const BlogDtails = () => {
   let { id } = useParams()
   // let uselocation = useLocation()
   // let currentId =uselocation.pathname.split("/")[2];
   let currentDetails = bologes.filter(v => v.id == id)[0]
   
  return (
    <div>
      <Header />
      <h1 className="text-white">{currentDetails.title}</h1>
      <p>{currentDetails.body}</p>
    </div>
  )
}

export default BlogDtails

