import AboutMe from "@/Pages/AboutMe";
import HomePage from "@/Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const useRouteElements = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "",
          element: <AboutMe />,
        },
      ],
    },
  ]);
  return router;
};
