import { createContext, useState } from "react";
import { css } from "../styled-system/css";
import Conteiner from "./components/Conteiner";
import Navbar from "./components/Navbar";

export const Context = createContext<"light" | "dark" | undefined>(undefined);

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>("dark");

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
          setTheme={() => {
            setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
            console.log(theme);
          }}
        ></Navbar>
        <Conteiner></Conteiner>
      </div>
    </Context.Provider>
  );
};

export default App;
