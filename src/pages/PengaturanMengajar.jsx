import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SetMengajar from "../components/SetMengajar";

function EditProfileGuru() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "guru";

  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <SetMengajar />
      <Footer />
    </>
  );
}

export default EditProfileGuru;
