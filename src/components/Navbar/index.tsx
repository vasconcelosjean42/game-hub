import { css } from "../../../styled-system/css";
import gameHubLogo from "../../assets/game-hub-logo.png";
import gameHubLogoBlack from "../../assets/game-hub-logo-slate-900.png";
import { StyledNavbar } from "./style";
import { useContext } from "react";
import { Context } from "../../App.tsx";
import Searcher from "../Searcher";

interface Props {
  setTheme: () => void;
}

const Navbar = ({ setTheme }: Props) => {
  const context = useContext(Context);
  return (
    <StyledNavbar visual={context?.theme}>
      <img
        className={css({ height: "100%" })}
        src={context?.theme === "dark" ? gameHubLogo : gameHubLogoBlack}
      />
      <Searcher />
      <label>
        <input
          type="checkbox"
          checked={context?.theme === "dark"}
          onChange={setTheme}
        ></input>
        <span>Dark Mode</span>
      </label>
    </StyledNavbar>
  );
};

export default Navbar;
