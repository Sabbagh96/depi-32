import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./About/AboutPage";
import DownloadPage from "./Download/DownloadPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "download",
    element: <DownloadPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
