import { ReactNode, useContext, useEffect, useState } from "react";
import Filters from "../Filter";
import Card from "../Card";
// import SouthParkTheStickOfTruth from "../../assets/south-park-the-stick-of-truth.png";
// import FarCry from "../../assets/far-cry-3.jpg";
// import CallOfDuty from "../../assets/call-of-duty.png";
// import BaldursGate from "../../assets/baldurs-gate.png";

// import {
//   FaWindows,
//   FaApple,
//   FaLinux,
//   FaPlaystation,
//   FaXbox,
//   FaAndroid,
// } from "react-icons/fa";
// import { BsNintendoSwitch } from "react-icons/bs";
import ApiClient from "../../services/api-client.ts";
import { StyledContent } from "./style";
import { Context } from "../../App.tsx";
import { HStack, Wrap } from "../../../styled-system/jsx";
import { StyledText } from "../../App.ts";

export interface GameProps {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  icon: string;
  released: Date;
  updated: Date;
  genres: {
    id: number;
    name: string;
  };
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
}

export interface FilterProps {
  id: string;
  name: string;
  disableHiddenOption?: string;
  options: string[];
  children?: ReactNode;
}

interface Props {
  genreName: string;
  handleGenre: (name: string) => void;
}

const Content = ({ genreName, handleGenre }: Props) => {
  const [games, setGames] = useState<GameProps[]>([]);
  //const [gamesList, setGamesList] = useState<GameProps[]>([]);
  const [plataforms, setPlataforms] = useState<FilterProps>();
  const [orders, setOrders] = useState<FilterProps>();
  const [orderBy, setOrderBy] = useState<string>("");
  const [filterPlataform, setFilterPlataform] = useState<string>("");
  const context = useContext(Context);

  const handleOrder = (value: string) => {
    setOrderBy(value);
  };

  const searchedGames = (): GameProps[] => {
    if (context?.search) {
      handleGenre("");
      return games.filter((game) =>
        game.name
          .toLocaleLowerCase()
          .includes(context.search.toLocaleLowerCase())
      );
    } else if (genreName) {
      return games.filter((game) => game.genres.name === genreName);
    } else if (filterPlataform) {
      return games.filter((game) =>
        game.platforms.some(
          (platform) => platform.platform.name === filterPlataform
        )
      );
    } else {
      return games;
    }
  };

  const orderedBy = (a: GameProps, b: GameProps) => {
    if (orderBy === "Relevance") {
      return b.metacritic - a.metacritic;
    } else if (orderBy === "Date added") {
      const dateA = a.updated;
      const dateB = b.updated;
      if (dateA < dateB) return -1;
      if (dateB > dateA) return 1;
      return 0;
    } else if (orderBy === "Name") {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameB > nameA) return 1;
      return 0;
    } else if (orderBy === "Release date") {
      const dateA = a.released;
      const dateB = b.released;
      if (dateA < dateB) return -1;
      if (dateB > dateA) return 1;
      return 0;
    } else if (orderBy === "Popularity") {
      return b.platforms.length - a.platforms.length;
    }
    return b.metacritic - a.metacritic;
  };

  // useEffect(() => {
  //   setGames([
  //     {
  //       name: "South Park",
  //       image: SouthParkTheStickOfTruth,
  //       relevance: 92,
  //       icon: "🎯",
  //       releaseDate: new Date(2010, 10, 4),
  //       dateAdded: new Date(Date.now()),
  //       genres: "RPG",
  //       plataforms: [
  //         { plataformName: "Windows", plataformIcon: FaWindows },
  //         { plataformName: "Mac", plataformIcon: FaApple },
  //         { plataformName: "Linux", plataformIcon: FaLinux },
  //         { plataformName: "PS4", plataformIcon: FaPlaystation },
  //         { plataformName: "Xbox", plataformIcon: FaXbox },
  //         { plataformName: "Nintendo", plataformIcon: FaAndroid },
  //         { plataformName: "Android", plataformIcon: BsNintendoSwitch },
  //       ],
  //     },
  //     {
  //       name: "FarCry",
  //       image: FarCry,
  //       relevance: 90,
  //       icon: "🎯",
  //       releaseDate: new Date(2010, 10, 2),
  //       dateAdded: new Date(Date.now()),
  //       genres: "Action",
  //       plataforms: [
  //         { plataformName: "Windows", plataformIcon: FaWindows },
  //         { plataformName: "Linux", plataformIcon: FaLinux },
  //         { plataformName: "PS4", plataformIcon: FaPlaystation },
  //         { plataformName: "Nintendo", plataformIcon: FaAndroid },
  //         { plataformName: "Android", plataformIcon: BsNintendoSwitch },
  //       ],
  //     },
  //     {
  //       name: "CallOfDuty",
  //       image: CallOfDuty,
  //       relevance: 89,
  //       icon: "🎯",
  //       releaseDate: new Date(2010, 10, 1),
  //       dateAdded: new Date(Date.now()),
  //       genres: "Shooter",
  //       plataforms: [
  //         { plataformName: "Windows", plataformIcon: FaWindows },
  //         { plataformName: "Mac", plataformIcon: FaApple },
  //         { plataformName: "Linux", plataformIcon: FaLinux },
  //         { plataformName: "PS4", plataformIcon: FaPlaystation },
  //         { plataformName: "Xbox", plataformIcon: FaXbox },
  //         { plataformName: "Nintendo", plataformIcon: FaAndroid },
  //         { plataformName: "Android", plataformIcon: BsNintendoSwitch },
  //       ],
  //     },
  //     {
  //       name: "Baldurs Gate",
  //       image: BaldursGate,
  //       relevance: 99,
  //       icon: "🎲",
  //       releaseDate: new Date(2010, 10, 3),
  //       dateAdded: new Date(Date.now()),
  //       genres: "RPG",
  //       plataforms: [
  //         { plataformName: "Windows", plataformIcon: FaWindows },
  //         { plataformName: "Linux", plataformIcon: FaLinux },
  //         { plataformName: "PS4", plataformIcon: FaPlaystation },
  //         { plataformName: "Android", plataformIcon: BsNintendoSwitch },
  //       ],
  //     },
  //   ]);
  //   setPlataforms({
  //     id: "plataform",
  //     name: "plataform",
  //     disableHiddenOption: "Plataforms",
  //     options: [
  //       "Windows",
  //       "Mac",
  //       "Linux",
  //       "PS4",
  //       "Xbox",
  //       "Nintendo",
  //       "Android",
  //       "iOS",
  //     ],
  //   });
  //   setOrders({
  //     id: "orders",
  //     name: "orders",
  //     options: [
  //       "Relevance",
  //       "Date added",
  //       "Name",
  //       "Release date",
  //       "Popularity",
  //       "Average rating",
  //     ],
  //     children: "Order by: ",
  //   });
  // }, []);

  useEffect(() => {
    ApiClient.get("/games")
      .then(({ data }) => {
        return data.results;
      })
      .then((results: GameProps[]) => {
        console.log(results);
        setGames(results);
      });
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
          <Filters options={plataforms} setOrderBy={setFilterPlataform} />
        ) : null}
        {orders ? <Filters options={orders} setOrderBy={handleOrder} /> : null}
      </HStack>
      <Wrap>
        {games.length > 0 ? <p>{games[0].name}</p> : null}
        {searchedGames().length !== 0 ? (
          searchedGames()
            .sort(orderedBy)
            .map((game) => <Card game={game} key={game.name} />)
        ) : (
          <StyledText size={"h2"}>No content found</StyledText>
        )}
      </Wrap>
    </StyledContent>
  );
};

export default Content;
