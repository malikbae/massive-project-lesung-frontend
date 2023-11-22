import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Landingpage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/forgot-password" Component={ForgotPassword} />
      </Routes>
    </>
  );
};

export default App;
