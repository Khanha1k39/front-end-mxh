import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/Reset";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <SignUp></SignUp> },
  { path: "/resetpassword", element: <ResetPassword></ResetPassword> },
  { path: "/reset/:token", element: <ChangePassword></ChangePassword> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
