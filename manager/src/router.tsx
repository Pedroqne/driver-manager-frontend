import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { HomePage } from "./page/home";



const router = createBrowserRouter([

    {   
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }

        ],
    }

]);

export { router };