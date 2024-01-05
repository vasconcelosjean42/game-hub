import { useContext, useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import { filterReceipt } from "./style";
import { Context } from "../../App";

const Filters = () => {
  const [plataforms, setPlataforms] = useState<string[]>([]);
  const [orders, setOrders] = useState<string[]>([]);
  const theme = useContext(Context);
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

    setOrders([
      "Relevance",
      "Date added",
      "Name",
      "Release date",
      "Popularity",
      "Average rating",
    ]);
  }, []);

  return (
    <div className={css({ display: "flex", marginBottom: "6" })}>
      <select
        name="plataform"
        id="plataform"
        className={filterReceipt({ visual: theme, space: "m" })}
      >
        <option selected disabled hidden>
          Plataform
        </option>
        {plataforms.map((plataform) => (
          <option value={plataform}>{plataform}</option>
        ))}
      </select>
      <select
        name="order"
        id="order"
        defaultValue="Relevance"
        className={filterReceipt({ visual: theme })}
      >
        {orders.map((order) => (
          <option value={order}>Order by: {order}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
