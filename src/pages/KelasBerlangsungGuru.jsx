import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileGuru from "../components/ProfileGuru";
import LaporanGuru from "../components/LaporanGuru";

function KelasBerlangsungGuru() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <ProfileGuru />
      <LaporanGuru />
      <Footer />
    </>
  );
}

export default KelasBerlangsungGuru;
