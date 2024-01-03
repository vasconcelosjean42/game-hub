import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";

const Filters = () => {
  const [plataforms, setPlataforms] = useState<string[]>([]);

  const [orders, setOrders] = useState<string[]>([]);

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
        className={css({
          padding: "2",
          color: "slate.100",
          backgroundColor: "slate.900",
          borderRadius: "lg",
        })}
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
        className={css({
          marginLeft: "4",
          padding: "2",
          color: "slate.100",
          backgroundColor: "slate.900",
          borderRadius: "lg",
        })}
      >
        {orders.map((order) => (
          <option value={order}>Order by: {order}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
