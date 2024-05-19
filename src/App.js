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
import { checkAuthLoader } from "./util/Auth";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,

    children: [
      // { index: true, element: <HomePage></HomePage>, loader: checkAuthLoader },
      { index: true, element: <HomePage></HomePage> },
    ],
  },
  { path: "login", element: <Login></Login> },
  { path: "/password-reset", element: <ResetPassword></ResetPassword> },
  { path: "/reset/:token", element: <ChangePassword></ChangePassword> },
  {
    path: "/inbox",
    element: <Inbox></Inbox>,
  },
  { path: "logintest", element: <LoginTest></LoginTest> },

  { path: "/formilk", element: <SignupForm></SignupForm> },

  { path: "login", element: <Login></Login> },

  { path: "/signup", element: <SignUp></SignUp> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
