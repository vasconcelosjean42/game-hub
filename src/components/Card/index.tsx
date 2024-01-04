import { css } from "../../../styled-system/css";
import { GameProps } from "../Content";

interface Props {
  game: GameProps;
}

const Card = ({ game }: Props) => {
  return (
    <div
      className={css({
        width: "sm",
        height: "md",
        display: "flex",
        flexDirection: "column",
        color: "slate.100",
        backgroundColor: "slate.900",
        borderRadius: "2xl",
        marginRight: "4",
        marginBottom: "4",
      })}
    >
      <div
        className={css({
          color: "slate.100",
          display: "flex",
        })}
      >
        <img
          src={game.image}
          className={css({
            width: "full",
            height: "60",
            objectFit: "cover",
            objectPosition: "center",
            borderTopRadius: "2xl",
          })}
        />
      </div>
      <div
        className={css({
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "slate.900",
          borderBottomRadius: "2xl",
          padding: "4",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <div
            id="plataformIcons"
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2xl",
            })}
          >
            {game.plataforms.map((plataform) => (
              <plataform.plataformIcon
                className={css({ color: "slate.500", marginLeft: "2.5" })}
              />
            ))}
          </div>
          <div
            id="relevancia"
            className={css({
              color: "green.300",
              bgColor: "slate.700",
              padding: "1",
              paddingInline: "4",
              borderRadius: "sm",
              fontWeight: "bold",
            })}
          >
            <p>{game.relevance}</p>
          </div>
        </div>
        <h1 className={css({ fontSize: "5xl", fontWeight: "bold" })}>
          {game.name}
        </h1>
        <h2 className={css({ fontSize: "4xl" })}>{game.icon}</h2>
      </div>
    </div>
  );
};

export default Card;
