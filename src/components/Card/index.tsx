import { useContext } from "react";
import { css } from "../../../styled-system/css";
import { GameProps } from "../Content";
import { StyledCard } from "./style";
import { Context } from "../../App.tsx";
import { HStack, Stack } from "../../../styled-system/jsx";
import { StyledText } from "../../App.ts";

interface Props {
  game: GameProps;
}

const Card = ({ game }: Props) => {
  const context = useContext(Context);
  return (
    <StyledCard visual={context?.theme}>
      <Stack>
        <img
          src={game.background_image}
          className={css({
            w: "full",
            h: "60",
            objectFit: "cover",
            objectPosition: "center",
            borderTopRadius: "2xl",
          })}
        />
      </Stack>
      <Stack p="4">
        <HStack justifyContent="space-between">
          <HStack fontSize="2xl" gap="2" color="slate.500">
            {/* {game.platforms.map((plataform) => (
              <plataform.platform.name />
            ))} */}
          </HStack>
          <div
            id="relevancia"
            className={css({
              color: "green.300",
              bgColor: "rgba(51, 65, 85, 0.4)",
              p: "1",
              paddingInline: "4",
              borderRadius: "sm",
              fontWeight: "bold",
            })}
          >
            <p>{game.metacritic}</p>
          </div>
        </HStack>
        <StyledText size="h1">{game.name}</StyledText>
        <StyledText size="h2">{game.icon}</StyledText>
      </Stack>
    </StyledCard>
  );
};

export default Card;
