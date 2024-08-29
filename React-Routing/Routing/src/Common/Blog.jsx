
import Header from "./Header";
import BlogCard from "./BlogCard";
import { bologes } from "../Data/bologes";

const Blog = () => {
   let allBloges = bologes.map((bolog) => {
      return(
         <BlogCard key={bolog.id} bolog={bolog}/>
      )
   })
  return (
    <div>
      <Header />
      <div className="w-[1200px] mx-auto border">
        <div className="flex gap-4 flex-wrap">
          {allBloges}
        </div>
      </div>
    </div>
  );
};

export default Blog;
