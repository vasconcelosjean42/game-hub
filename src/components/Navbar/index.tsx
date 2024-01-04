import { css } from "../../../styled-system/css";
import gameHubLogo from "../../assets/game-hub-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { navbarReceipt } from "./style";
import { useContext } from "react";
import { Context } from "../../App";

interface Props {
  setTheme: () => void;
}

const Navbar = ({ setTheme }: Props) => {
  const theme = useContext(Context);
  return (
    <div className={navbarReceipt()}>
      <img className={css({ height: "100%" })} src={gameHubLogo} />
      <div
        className={css({
          height: "8",
          flex: 1,
          display: "flex",
          alignItems: "center",
          marginX: "16",
          paddingX: "2",
          backgroundColor: "slate.800",
          borderRadius: "lg",
        })}
      >
        <IoSearchOutline className={css({ color: "slate.300" })} />
        <input
          className={css({
            width: "full",
            height: "8",
            paddingX: "5",
            backgroundColor: "transparent",
            color: "slate.300",
            outlineWidth: "0",
          })}
          type="search"
          placeholder="Search games..."
        />
      </div>
      <label>
        <input type="checkbox" checked={theme} onChange={setTheme}></input>
        <span>Dark Mode</span>
      </label>
    </div>
  );
};

export default Navbar;
