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
import NotifikasiSiswa from "./pages/NotifikasiSiswa";
import ProfileSiswaBaru from "./pages/ProfileSiswaBaru";
import EditProfileSiswa from "./pages/EditProfileSiswa";
import HomepageGuru from "./pages/HomepageGuru";

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
        <Route path="/notifikasi-siswa" Component={NotifikasiSiswa} />
        <Route path="/profile-siswa" Component={ProfileSiswaBaru} />
        <Route path="/edit-profile-siswa" Component={EditProfileSiswa} />
        <Route path="/home-guru" Component={HomepageGuru} />
      </Routes>
    </>
  );
};

export default App;
