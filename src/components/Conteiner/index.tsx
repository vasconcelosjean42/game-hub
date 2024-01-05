import { conteinerReceipt } from "./style";
import Content from "../Content";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../../App";

const Conteiner = () => {
  const theme = useContext(Context);

  return (
    <div className={conteinerReceipt({ visual: theme })}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
};

export default Conteiner;
