import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/Reset";
import LoginTest from "./pages/LoginTest";
import Inbox from "./pages/Inbox";
import SignupForm from "./pages/Formilk";
const router = createBrowserRouter([
  { path: "/logintest", element: <LoginTest></LoginTest> },
  { path: "/", element: <HomePage></HomePage> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <SignUp></SignUp> },
  { path: "/password-reset", element: <ResetPassword></ResetPassword> },
  { path: "/reset/:token", element: <ChangePassword></ChangePassword> },
  { path: "/inbox", element: <Inbox></Inbox> },
  { path: "/formilk", element: <SignupForm></SignupForm> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
