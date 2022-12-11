import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Skills from "../Pages/Home/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            }
        ]
    }
])

export default router;