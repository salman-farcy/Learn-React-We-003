import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cource from "../Pages/Cource";




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
]);