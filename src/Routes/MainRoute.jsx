import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

export const MainRoute = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout
    }
])