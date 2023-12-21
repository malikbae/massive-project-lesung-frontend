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
import KelasBerlangsungGuru from "./pages/KelasBerlangsungGuru";
import KelasBerlangsungKonfirmasiOrtu from "./pages/KelasBerlangsungKonfirmasiOrtu";
import EditProfileGuru from "./pages/EditProfileGuru";
import EditProfileGuru2 from "./pages/EditProfileGuru2";
import PengaturanMengajar from "./pages/PengaturanMengajar";
import NotifikasiSiswa from "./pages/NotifikasiSiswa";
import ProfileSiswaBaru from "./pages/ProfileSiswaBaru";
import EditProfileSiswa from "./pages/EditProfileSiswa";
import HomepageGuru from "./pages/HomepageGuru";
import Dashboard from "./pages/Dashboard";
import User from "./components/User";
import Guru from "./components/Guru";
import KelasBerlangsung from "./components/KelasBerlangsung";

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
        <Route path="/kelas-berlangsung-guru" Component={KelasBerlangsungGuru} />
        <Route path="/kelas-berlangsung-konfirmasi-ortu" Component={KelasBerlangsungKonfirmasiOrtu} />
        <Route path="/edit-profile-guru" Component={EditProfileGuru} />
        <Route path="/edit-profile-guru/edit" Component={EditProfileGuru2} />
        <Route path="/pengaturan-mengajar" Component={PengaturanMengajar} />
        <Route path="/notifikasi-siswa" Component={NotifikasiSiswa} />
        <Route path="/profile-siswa" Component={ProfileSiswaBaru} />
        <Route path="/edit-profile-siswa" Component={EditProfileSiswa} />
        <Route path="/home-guru" Component={HomepageGuru} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/user" Component={User} />
        <Route path="/guru" Component={Guru} />
        <Route path="/kelas-berlangsung" Component={KelasBerlangsung} />
      </Routes>
    </>
  );
};

export default App;
