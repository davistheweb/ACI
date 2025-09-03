import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PageNotFound } from "./components/PageNotFound";
import { Home } from "./components/landing";
import {
  About,
  Membership,
  Contact,
  Ministries,
  Education,
  Leadership,
  Events,
  Consecration,
  Certificates,
  Application,
  Register
} from "@/pages";
import { Layout } from "./Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <Navbar />
        <ScrollToTop />
        <PageNotFound />
        <Footer />
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "membership", element: <Membership /> },
      { path: "contact", element: <Contact /> },
      { path: "ministries", element: <Ministries /> },
      { path: "education", element: <Education /> },
      { path: "leadership", element: <Leadership /> },
      { path: "events", element: <Events /> },
      { path: "consecration", element: <Consecration /> },
      { path: "certificates", element: <Certificates /> },
      { path: "membership/application", element: <Application /> },
      { path: "membership/register", element: <Register /> },
    ],
  },
]);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <RouterProvider router={router} />
  </TooltipProvider>
);

export default App;
