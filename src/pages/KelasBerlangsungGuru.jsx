import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileGuru from "../components/ProfileGuru";
import LaporanGuru from "../components/LaporanGuru";

function KelasBerlangsungGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "guru";

  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <ProfileGuru />
      <LaporanGuru />
      <Footer />
    </>
  );
}

export default KelasBerlangsungGuru;
