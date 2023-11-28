import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import DaftarPage from "./pages/DaftarPage";
import Profile from "./pages/ProfileSiswa";
import DetailGuru from "./pages/DetailGuru";
import RekrutGuru from "./pages/RekrutGuru";
import KelasBerlangsungSiswa from "./pages/KelasBerlangsungSIswa";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Landingpage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/daftar" Component={DaftarPage} />
        <Route path="/profile" Component={Profile} />
        <Route path="/detail-guru" Component={DetailGuru} />
        <Route path="/rekrut-guru" Component={RekrutGuru} />
        <Route path="/kelas-berlangsung" Component={KelasBerlangsungSiswa} />
      </Routes>
    </>
  );
};

export default App;
