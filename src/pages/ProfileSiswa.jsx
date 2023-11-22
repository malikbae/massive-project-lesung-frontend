import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import RiwayatKelas from "../components/RiwayatKelas";

function ProfileSiswa() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <Profile />
      <RiwayatKelas />
      <Footer />
    </>
  );
}

export default ProfileSiswa;
