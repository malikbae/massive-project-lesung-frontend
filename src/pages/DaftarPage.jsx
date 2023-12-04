import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DaftarGuru from "../components/DaftarGuru";

function Daftar() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "siswa";
  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <DaftarGuru />
      <Footer />
    </>
  );
}

export default Daftar;
