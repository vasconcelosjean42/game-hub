import { useContext, useEffect, useState } from "react";
import Action from "../../assets/gender-action.jpg";
import Indie from "../../assets/gender-indie.jpg";
import Adventure from "../../assets/gender-adventure.jpg";
import RPG from "../../assets/gender-rpg.jpg";
import Strategy from "../../assets/gender-strategy.jpg";
import Shooter from "../../assets/gender-shooter.jpeg";
import { css } from "../../../styled-system/css";
import { Context } from "../../App.tsx";
import { sidebarReceipt } from "./style";
import { StyledText } from "../../App.ts";
import { hstack } from "../../../styled-system/patterns/hstack";

interface ImageProps {
  name: string;
  image: string;
}

interface Props {
  genreName: string;
  handleGenres: (name: string) => void;
}

const Sidebar = ({ handleGenres, genreName }: Props) => {
  const [genres, setGenres] = useState<ImageProps[]>([]);
  const context = useContext(Context);

  useEffect(() => {
    setGenres([
      {
        name: "Action",
        image: Action,
      },
      {
        name: "Indie",
        image: Indie,
      },
      {
        name: "Adventure",
        image: Adventure,
      },
      {
        name: "RPG",
        image: RPG,
      },
      {
        name: "Strategy",
        image: Strategy,
      },
      {
        name: "Shooter",
        image: Shooter,
      },
    ]);
  }, []);

  return (
    <div className={sidebarReceipt({ visual: context?.theme })}>
      <StyledText size="h2" mb={4}>
        Genres
      </StyledText>
      <ul>
        {genres.map((genre) => (
          <li
            className={hstack({ mb: "4", cursor: "pointer" })}
            onClick={() => {
              genre.name === genreName
                ? handleGenres("")
                : handleGenres(genre.name);
            }}
          >
            <img
              src={genre.image}
              className={css({
                width: "12",
                height: "12",
                objectFit: "cover",
                borderRadius: "2xl",
              })}
            />
            <StyledText weight={genre.name === genreName ? "b" : undefined}>
              {genre.name}
            </StyledText>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
