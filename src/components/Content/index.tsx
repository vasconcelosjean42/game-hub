import { ElementType, ReactNode, useContext, useEffect, useState } from "react";
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
import { StyledContent } from "./style";
import { Context } from "../../App.tsx";
import { HStack, Wrap } from "../../../styled-system/jsx";
import { StyledText } from "../../App.ts";

export interface GameProps {
  name: string;
  image: string;
  relevance: number;
  icon: string;
  plataforms: {
    plataformName: string;
    plataformIcon: ElementType;
  }[];
}

export interface FilterProps {
  id: string;
  name: string;
  disableHiddenOption?: string;
  options: string[];
  children?: ReactNode;
}

const Content = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [plataforms, setPlataforms] = useState<FilterProps>();
  const [orders, setOrders] = useState<FilterProps>();
  const [orderBy, setOrderBy] = useState<string>("");
  const context = useContext(Context);

  const filteredGames = context?.search
    ? games.filter((game) =>
        game.name
          .toLocaleLowerCase()
          .includes(context.search.toLocaleLowerCase())
      )
    : games;

  const orderedBy = (a: GameProps, b: GameProps) => {
    if (orderBy === "Relevance") {
      return b.relevance - a.relevance;
    } else if (orderBy === "Popularity") {
      return b.plataforms.length - a.plataforms.length;
    }
    return b.relevance - a.relevance;
  };

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
          { plataformName: "Mac", plataformIcon: FaApple },
          { plataformName: "Linux", plataformIcon: FaLinux },
          { plataformName: "PS4", plataformIcon: FaPlaystation },
          { plataformName: "Xbox", plataformIcon: FaXbox },
          { plataformName: "Nintendo", plataformIcon: FaAndroid },
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
          { plataformName: "Linux", plataformIcon: FaLinux },
          { plataformName: "PS4", plataformIcon: FaPlaystation },
          { plataformName: "Android", plataformIcon: BsNintendoSwitch },
        ],
      },
    ]);
    setPlataforms({
      id: "plataform",
      name: "plataform",
      disableHiddenOption: "Plataforms",
      options: [
        "Windows",
        "Mac",
        "Linux",
        "PS4",
        "Xbox",
        "Nintendo",
        "Android",
        "iOS",
      ],
    });
    setOrders({
      id: "orders",
      name: "orders",
      options: [
        "Relevance",
        "Date added",
        "Name",
        "Release date",
        "Popularity",
        "Average rating",
      ],
      children: "Order by: ",
    });
  }, []);

  return (
    <StyledContent visual={context?.theme}>
      <StyledText size="h1">Games</StyledText>
      <HStack>
        {plataforms ? (
          <Filters options={plataforms} setOrderBy={setOrderBy} />
        ) : null}
        {orders ? <Filters options={orders} /> : null}
      </HStack>
      <Wrap>
        {filteredGames.length !== 0 ? (
          filteredGames.sort(orderedBy).map((game) => <Card game={game} />)
        ) : (
          <StyledText size={"h2"}>No content found</StyledText>
        )}
      </Wrap>
    </StyledContent>
  );
};

export default Content;
