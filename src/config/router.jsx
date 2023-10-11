import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Private from "../layout/PrivateLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "/home",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                ],
            },
        ],
    },
]);
