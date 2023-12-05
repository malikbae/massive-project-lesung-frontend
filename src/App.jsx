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
import KelasBerlangsungGuru from "./pages/KelasBerlangsungGuru";
import KelasBerlangsungKonfirmasiOrtu from "./pages/KelasBerlangsungKonfirmasiOrtu";
import EditProfileGuru from "./pages/EditProfileGuru";
import EditProfileGuru2 from "./pages/EditProfileGuru2";
import PengaturanMengajar from "./pages/PengaturanMengajar";

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
        <Route
          path="/kelas-berlangsung-guru"
          Component={KelasBerlangsungGuru}
        />
        <Route
          path="/kelas-berlangsung-konfirmasi-ortu"
          Component={KelasBerlangsungKonfirmasiOrtu}
        />
        <Route path="/edit-profile-guru" Component={EditProfileGuru} />
        <Route path="/edit-profile-guru/edit" Component={EditProfileGuru2} />
        <Route path="/pengaturan-mengajar" Component={PengaturanMengajar} />
      </Routes>
    </>
  );
};

export default App;
