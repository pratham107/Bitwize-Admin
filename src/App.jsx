import Login from "./components/Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Center from "./components/Layout/Center";
// import NotFound from "./components/NotFound"; // A simple 404 page
import Meal from "./components/Meal/Meal";
import Agent from "./components/Agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <>
      <Navbar />
      <Center />
    </>,
  },
  {
    path: "/meal",
    element: <>
      <Navbar />
      <Meal />
    </>,
  },
  {
    path: "/agent",
    element: <>
      <Navbar />
      <Agent />
    </>,
  },
  // {
  //   path: "*", // This catches all undefined routes
  //   element: <NotFound />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
