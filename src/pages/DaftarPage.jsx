import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DaftarGuru from "../components/DaftarGuru";

function Daftar() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <DaftarGuru />
      <Footer />
    </>
  );
}

export default Daftar;
