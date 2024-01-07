import { StyledConteiner } from "./style";
import Content from "../Content";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../../App.tsx";

const Conteiner = () => {
  const context = useContext(Context);

  return (
    <StyledConteiner visual={context?.theme}>
      <Sidebar></Sidebar>
      <Content></Content>
    </StyledConteiner>
  );
};

export default Conteiner;
