import { Dispatch, SetStateAction, createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content";
import { StyledApp } from "./App.ts";
import { Stack } from "../styled-system/jsx/stack";

interface ContextProps {
  theme: "light" | "dark";
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<ContextProps | undefined>(undefined);

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [search, setSearch] = useState<string>("");

  return (
    <Context.Provider value={{ theme, search, setSearch }}>
      <Stack gap={0} height="100vh">
        <Navbar
          setTheme={() => {
            setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
          }}
        />
        <StyledApp visual={theme} height="full">
          <Sidebar></Sidebar>
          <Content></Content>
        </StyledApp>
      </Stack>
    </Context.Provider>
  );
};

export default App;
