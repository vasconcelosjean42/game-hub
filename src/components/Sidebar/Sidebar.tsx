import { useContext, useEffect, useState } from "react";
import Farcry3 from "../../assets/far-cry-3.jpg";
import { css } from "../../../styled-system/css";
import { Context } from "../../App.tsx";
import { sidebarReceipt } from "./style";
import { StyledH2 } from "../../App.ts";
import { hstack } from "../../../styled-system/patterns/hstack";

const Sidebar = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const theme = useContext(Context);

  useEffect(() => {
    setGenres(["Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter"]);
  }, []);

  return (
    <div className={sidebarReceipt({ visual: theme })}>
      <StyledH2>Genres</StyledH2>
      <ul>
        {genres.map((genre) => (
          <li className={hstack({ mb: "4" })}>
            <img
              src={Farcry3}
              className={css({
                width: "12",
                height: "12",
                objectFit: "cover",
                borderRadius: "2xl",
                marginRight: "2",
              })}
            />
            <span className={css({ fontSize: "large" })}>{genre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
