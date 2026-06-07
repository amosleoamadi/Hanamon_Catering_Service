import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../features/home/components/layout/HomeLayout";
import HomePage from "../features/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
