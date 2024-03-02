import "@/App.css";
import { RouterProvider } from "react-router-dom";
import { useRouteElements } from "./routes/useRouteElements";

function App() {
  return <RouterProvider router={useRouteElements()} />;
}

export default App;
