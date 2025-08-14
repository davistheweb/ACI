import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./components/landing";
import { PageNotFound } from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
