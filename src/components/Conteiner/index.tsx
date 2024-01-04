import { conteinerReceipt } from "./style";
import Content from "../Content";
import Sidebar from "../Sidebar";

interface Props {
  isLight: boolean;
}

const Conteiner = ({ isLight }: Props) => {
  return (
    <div className={conteinerReceipt({ visual: isLight ? "light" : "dark" })}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
};

export default Conteiner;
