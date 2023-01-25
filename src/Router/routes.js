import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
