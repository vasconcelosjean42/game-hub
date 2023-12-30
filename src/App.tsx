import { css } from "../styled-system/css";

const App = () => {
  return (
    <div
      className={css({ fontSize: "2xl", fontWeight: "bold", color: "blue" })}
    >
      Hello 🐼!
    </div>
  );
};

export default App;
