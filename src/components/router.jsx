import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Users from "../pages/Users";
import UserList from "../pages/UserList";
import CreateUser from "../pages/CreateUser";
import Service from "../pages/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Service /> },
    ],
  },
],{
  basename: "/Trippy1"
});
