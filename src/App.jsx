import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./components/User";
import Guru from "./components/Guru";
import KelasBerlangsung from "./components/KelasBerlangsung";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/user" Component={User} />
        <Route path="/guru" Component={Guru} />
        <Route path="/kelas-berlangsung" Component={KelasBerlangsung} />
      </Routes>
    </>
  );
};

export default App;
