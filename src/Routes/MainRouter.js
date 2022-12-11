import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Skills from "../Pages/Home/Skills/Skills";
import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";
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
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/project/:name',
                element: <ProjectDetail></ProjectDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.name}`)
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;