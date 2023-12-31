import { css } from "../../styled-system/css";
import gameHubLogo from "../assets/game-hub-logo.png";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div
      className={css({
        width: "full",
        height: "16",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        objectFit: "contain",
        paddingX: "20",
        paddingY: "2",
        backgroundColor: "slate.700",
      })}
    >
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
        <IoSearchOutline className={css({ color: "white" })} />
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
        <input type="checkbox"></input>
        <span>Dark Mode</span>
      </label>
    </div>
  );
};

export default Navbar;
