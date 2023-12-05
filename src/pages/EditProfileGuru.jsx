import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditGuru from "../components/EditGuru";

function EditProfileGuru() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <EditGuru />
      <Footer />
    </>
  );
}

export default EditProfileGuru;
