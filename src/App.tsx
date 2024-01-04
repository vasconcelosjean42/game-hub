import { css } from "../styled-system/css";
import Conteiner from "./components/Conteiner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className={css({
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Navbar></Navbar>
      <Conteiner></Conteiner>
    </div>
  );
};

export default App;
