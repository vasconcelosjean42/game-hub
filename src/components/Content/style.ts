import { cva } from "../../../styled-system/css";
import { Stack, styled } from "../../../styled-system/jsx";

export const contentReceipt = cva({
  variants: {
    visual: {
      light: {
        color: "slate.900",
      },
      dark: {
        color: "slate.100",
      }
    },
  }
})

export const StyledContent = styled(Stack, contentReceipt)