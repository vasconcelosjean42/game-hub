import { cva } from "../../../styled-system/css";
import { Stack, styled } from "../../../styled-system/jsx";

const cardReceipt = cva({
  base: {
    w: "sm",
    mr: "4",
    borderRadius: "2xl",
  },
  variants: {
    visual: {
      light: {
        color: "slate.900",
        bgColor: "slate.300",
      },
      dark: {
        color: "slate.100",
        bgColor: "slate.900",
      }
    },
  }
})

export const StyledCard = styled(Stack, cardReceipt)