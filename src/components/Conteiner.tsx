import { css } from "../../styled-system/css";
import Sidebar from "./Sidebar";

const Conteiner = () => {
  return (
    <div
      className={css({
        display: "flex",
        padding: "5",
        backgroundColor: "slate.900",
      })}
    >
      <Sidebar></Sidebar>
    </div>
  );
};

export default Conteiner;
