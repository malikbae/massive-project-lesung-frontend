import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Layanan1 from "../components/Layanan1";
import Layanan2 from "../components/Layanan2";
import Kisah from "../components/Kisah";
import Video from "../components/Video";

const Landingpage = () => {
  const isUserLoggedIn = false;
  return (
    <div>
      <NavBar is_login={isUserLoggedIn} />
      <Intro />
      <Layanan1 />
      <Layanan2 />
      <Kisah />
      <Video />
      <Footer />
    </div>
  );
};

export default Landingpage;
