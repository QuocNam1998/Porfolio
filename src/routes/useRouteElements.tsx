import Main from "@/components/Layout/Main";
import { createBrowserRouter } from "react-router-dom";

export const useRouteElements = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return router;
};
