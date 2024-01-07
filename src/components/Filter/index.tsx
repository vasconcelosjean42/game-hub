import { useContext } from "react";
import { StyledFilter } from "./style";
import { Context } from "../../App.tsx";
import { HStack } from "../../../styled-system/jsx/hstack";
import { FilterProps } from "../Content/index.tsx";

interface Props {
  options: FilterProps;
}

const Filters = ({ options }: Props) => {
  const context = useContext(Context);

  return (
    <HStack mb="6">
      <StyledFilter name={options.name} id={options.id} visual={context?.theme}>
        {options.disableHiddenOption ? (
          <option selected disabled hidden>
            {options.disableHiddenOption}
          </option>
        ) : null}
        {options.options.map((optionName) => (
          <option value={optionName}>{optionName}</option>
        ))}
      </StyledFilter>
    </HStack>
  );
};

export default Filters;
