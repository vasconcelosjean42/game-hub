import { createContext, useState } from "react";
import { css } from "../styled-system/css";
import Conteiner from "./components/Conteiner";
import Navbar from "./components/Navbar";

export const Context = createContext<string | undefined>(undefined);

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider value={theme}>
      <div
        className={css({
          width: "full",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Navbar
          theme={theme}
          handleLight={() => {
            setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
            console.log(theme);
          }}
        ></Navbar>
        <Conteiner theme={theme}></Conteiner>
      </div>
    </Context.Provider>
  );
};

export default App;
