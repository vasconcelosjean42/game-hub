import { useContext } from "react";
import { css } from "../../../styled-system/css";
import { GameProps } from "../Content";
import { StyledCard } from "./style";
import { Context } from "../../App";
import { HStack, Stack } from "../../../styled-system/jsx";

interface Props {
  game: GameProps;
}

const Card = ({ game }: Props) => {
  const theme = useContext(Context);

  return (
    <StyledCard visual={theme}>
      <Stack>
        <img
          src={game.image}
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
            {game.plataforms.map((plataform) => (
              <plataform.plataformIcon />
            ))}
          </HStack>
          <div
            id="relevancia"
            className={css({
              color: "green.300",
              bgColor: "rgba(51, 65, 85, 0.3)",
              p: "1",
              paddingInline: "4",
              borderRadius: "sm",
              fontWeight: "bold",
            })}
          >
            <p>{game.relevance}</p>
          </div>
        </HStack>
        <h1 className={css({ fontSize: "5xl", fontWeight: "bold" })}>
          {game.name}
        </h1>
        <h2 className={css({ fontSize: "4xl" })}>{game.icon}</h2>
      </Stack>
    </StyledCard>
  );
};

export default Card;
