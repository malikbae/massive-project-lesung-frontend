import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormGuru from "../components/FormGuru";

function EditProfileGuru() {
  const isUserLoggedIn = true;
  return (
    <>
      <NavBar is_login={isUserLoggedIn} />
      <FormGuru />
      <Footer />
    </>
  );
}

export default EditProfileGuru;
