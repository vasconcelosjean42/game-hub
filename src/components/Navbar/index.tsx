import { css } from "../../../styled-system/css";
import gameHubLogo from "../../assets/game-hub-logo.png";
import gameHubLogoBlack from "../../assets/game-hub-logo-black.png";
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
    <div className={navbarReceipt({ visual: theme })}>
      <img
        className={css({ height: "100%" })}
        src={theme === "dark" ? gameHubLogo : gameHubLogoBlack}
      />
      <div
        className={css({
          height: "8",
          flex: 1,
          display: "flex",
          alignItems: "center",
          marginX: "16",
          paddingX: "2",
          backgroundColor: theme === "dark" ? "slate.800" : "slate.300",
          color: theme === "dark" ? "slate.300" : "slate.900",
          borderRadius: "lg",
        })}
      >
        <IoSearchOutline />
        <input
          className={css({
            width: "full",
            height: "8",
            paddingX: "5",
            backgroundColor: "transparent",
            outlineWidth: "0",
          })}
          type="search"
          placeholder="Search games..."
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={setTheme}
        ></input>
        <span>Dark Mode</span>
      </label>
    </div>
  );
};

export default Navbar;
