import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cource from "../Pages/Cource";
import Blog from "../Common/Blog";
import BlogDtails from "../Common/BlogDtails";
import Error404 from "../Pages/Error404";




export const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "about",
      element: <About />,
   },
   {
      path: "corce",
      element: <Cource />
   },
   {
      path: "blog",
      element: <Blog />
   },
   {
      path:"blog/:id",
      element: <BlogDtails />
   }
   ,{
      path:"*",
      element: <Error404 />
   }
]);