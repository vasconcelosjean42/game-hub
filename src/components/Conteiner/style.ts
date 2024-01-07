import { cva } from "../../../styled-system/css";
import { Stack, styled } from "../../../styled-system/jsx";

const conteinerReceipt = cva({
  base: {
    flexDirection: "row",
    padding: "8",
  },
  variants: {
    visual: {
      light: {
        backgroundColor: "slate.100"
      },
      dark: {
        backgroundColor: "slate.950"
      }
    },
  }
})

export const StyledConteiner = styled(Stack, conteinerReceipt)