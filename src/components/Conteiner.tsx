import { css } from "../../styled-system/css";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Conteiner = () => {
  return (
    <div
      className={css({
        display: "flex",
        padding: "5",
        backgroundColor: "slate.950",
      })}
    >
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
};

export default Conteiner;
