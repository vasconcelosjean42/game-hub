import { useContext } from "react";
import { css } from "../../../styled-system/css";
import { Context } from "../../App";
import { IoSearchOutline } from "react-icons/io5";
import { StyledSearch } from "./style";

const Searcher = () => {
  const theme = useContext(Context);
  return (
    <StyledSearch visual={theme}>
      <IoSearchOutline />
      <input
        className={css({
          w: "full",
          h: "8",
          px: "5",
          bgColor: "transparent",
          outlineWidth: "0",
        })}
        type="search"
        placeholder="Search games..."
      />
    </StyledSearch>
  );
};

export default Searcher;
