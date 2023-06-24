import Header from "./components/header";
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Journey from "./pages/journey";
import Store from "./pages/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/journey",
          element: <Journey />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
