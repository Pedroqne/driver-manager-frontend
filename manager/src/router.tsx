import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Dashboard} from "./page/dashboard";



const router = createBrowserRouter([

    {   
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            }

        ],
    }

]);

export { router };