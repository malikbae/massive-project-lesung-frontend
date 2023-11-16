import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PilihJenjang from "./pages/PilihJenjang";
import PilihProgram from "./pages/PilihProgram";
import Testimoni from "./pages/Testimoni";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/pilih-jenjang" Component={PilihJenjang} />
        <Route path="/pilih-program" Component={PilihProgram} />
        <Route path="/testimoni" Component={Testimoni} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
