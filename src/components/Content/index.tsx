import React, { useContext, useEffect, useState } from "react";
import Filters from "../Filter";
import Card from "../Card";
import SouthParkTheStickOfTruth from "../../assets/south-park-the-stick-of-truth.png";
import FarCry from "../../assets/far-cry-3.jpg";
import CallOfDuty from "../../assets/call-of-duty.png";
import BaldursGate from "../../assets/baldurs-gate.png";

import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { css } from "../../../styled-system/css";
import { contentReceipt } from "./style";
import { Context } from "../../App";

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
  const theme = useContext(Context);

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
      {
        name: "FarCry",
        image: FarCry,
        relevance: 90,
        icon: "🎯",
        plataforms: [
          { plataformName: "Windows", plataformIcon: FaWindows },
          { plataformName: "Linux", plataformIcon: FaLinux },
          { plataformName: "PS4", plataformIcon: FaPlaystation },
          { plataformName: "Nintendo", plataformIcon: FaAndroid },
          { plataformName: "Android", plataformIcon: BsNintendoSwitch },
        ],
      },
      {
        name: "CallOfDuty",
        image: CallOfDuty,
        relevance: 89,
        icon: "🎯",
        plataforms: [
          { plataformName: "Windows", plataformIcon: FaWindows },
          { plataformName: "Linux", plataformIcon: FaLinux },
          { plataformName: "PS4", plataformIcon: FaPlaystation },
          { plataformName: "Android", plataformIcon: BsNintendoSwitch },
        ],
      },
      {
        name: "Baldurs Gate",
        image: BaldursGate,
        relevance: 99,
        icon: "🎲",
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
    <div className={contentReceipt({ visual: theme })}>
      <h1
        className={css({
          fontSize: "5xl",
          fontWeight: "bold",
        })}
      >
        Games
      </h1>
      <Filters />
      <div
        className={css({
          width: "1200px",
          display: "flex",
          flexWrap: "wrap",
        })}
      >
        {games.map((game) => (
          <Card game={game} />
        ))}
      </div>
    </div>
  );
};

export default Content;
