import { useEffect, useState } from "react";
import Farcry3 from "../assets/far-cry-3.jpg";
import { css } from "../../styled-system/css";

const Sidebar = () => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    setGenres(["Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter"]);
  }, []);

  return (
    <div
      className={css({
        width: "1/6",
        height: "85vh",
        color: "slate.100",
      })}
    >
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
            <span className={css({ color: "slate.100", fontSize: "large" })}>
              {genre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
