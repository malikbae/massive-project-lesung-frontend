import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditGuru from "../components/EditGuru";

function EditProfileGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "guru";

  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <EditGuru />
      <Footer />
    </>
  );
}

export default EditProfileGuru;
