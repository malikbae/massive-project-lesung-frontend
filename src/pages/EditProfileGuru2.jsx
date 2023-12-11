import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormGuru from "../components/FormGuru";

function EditProfileGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "guru";

  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <FormGuru />
      <Footer />
    </>
  );
}

export default EditProfileGuru;
