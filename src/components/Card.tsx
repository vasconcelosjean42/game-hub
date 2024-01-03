import React, { useEffect, useState } from "react";
import { css } from "../../styled-system/css";
import SouthParkTheStickOfTruth from "../assets/south-park-the-stick-of-truth.png";

const Card = () => {
  const [plataforms, setPlataforms] = useState<string[]>([]);

  useEffect(() => {
    setPlataforms([
      "Windows",
      "Mac",
      "Linux",
      "PS4",
      "Xbox",
      "Nintendo",
      "Android",
      "iOS",
    ]);
  }, []);
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
      })}
    >
      <div
        className={css({
          color: "slate.100",
          display: "flex",
        })}
      >
        <img
          src={SouthParkTheStickOfTruth}
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
            backgroundColor: "green",
          })}
        >
          <div
            id="plataformIcons"
            className={css({
              display: "flex",
            })}
          >
            {plataforms.map((plataform) => (
              <p className={css({ marginRight: "2" })}>
                {plataform.slice(0, 1)}
              </p>
            ))}
          </div>
          <div
            id="relevancia"
            className={css({
              color: "green.300",
              bgColor: "green.200",
              padding: "0.5",
              paddingInline: "3",
              borderRadius: "sm",
            })}
          >
            <p>92</p>
          </div>
        </div>
        <h1 className={css({ fontSize: "5xl", fontWeight: "bold" })}>
          South park
        </h1>
        <h2>The stick of truth</h2>
      </div>
    </div>
  );
};

export default Card;
