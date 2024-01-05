import { useContext, useEffect, useState } from "react";
import Farcry3 from "../../assets/far-cry-3.jpg";
import { css } from "../../../styled-system/css";
import { Context } from "../../App";
import { sidebarReceipt } from "./style";

const Sidebar = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const theme = useContext(Context);

  useEffect(() => {
    setGenres(["Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter"]);
  }, []);

  return (
    <div className={sidebarReceipt({ visual: theme })}>
      <h1
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          marginBottom: "4",
        })}
      >
        Genres
      </h1>
      <ul>
        {genres.map((genre) => (
          <li
            className={css({
              display: "flex",
              alignItems: "center",
              marginBottom: "4",
            })}
          >
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
