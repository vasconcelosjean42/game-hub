import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Card from "./Card";
import SouthParkTheStickOfTruth from "../assets/south-park-the-stick-of-truth.png";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

export interface GameProps {
  name: string;
  image: string;
  relevance: number;
  icon: string;
  plataforms: {
    plataformName: string;
    plataformIcon: HTMLElement;
  }[];
}

const Content = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    setGames([
      {
        name: "South Park",
        image: SouthParkTheStickOfTruth,
        relevance: 92,
        icon: "🎯",
        plataforms: [
          { plataformName: "Windows", plataformIcon: FaWindows },
          { plataformName: "Mac", plataformIcon: FaApple },
          { plataformName: "Linux", plataformIcon: FaLinux },
          { plataformName: "PS4", plataformIcon: FaPlaystation },
          { plataformName: "Xbox", plataformIcon: FaXbox },
          { plataformName: "Nintendo", plataformIcon: FaAndroid },
          { plataformName: "Android", plataformIcon: BsNintendoSwitch },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <Filters />
      {games.map((game) => (
        <Card />
      ))}
    </div>
  );
};

export default Content;
