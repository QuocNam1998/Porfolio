import AboutMe from "@/pages/AboutMe";
import HomePage from "@/pages/HomePage";
import MyProjects from "@/pages/MyProjects";
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
        {
          path: "/project",
          element: <MyProjects />,
        },
      ],
    },
  ]);
  return router;
};
