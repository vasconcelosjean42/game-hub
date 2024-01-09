import { useContext } from "react";
import { css } from "../../../styled-system/css";
import { Context } from "../../App.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { StyledSearch } from "./style";

const Searcher = () => {
  const context = useContext(Context);
  return (
    <StyledSearch visual={context?.theme}>
      <IoSearchOutline />
      <input
        className={css({
          w: "full",
          h: "8",
          px: "4",
          bgColor: "transparent",
          outlineWidth: "0",
        })}
        type="search"
        onChange={(e) => context?.setSearch(e.target.value)}
        placeholder="Search games..."
      />
    </StyledSearch>
  );
};

export default Searcher;
