import { cva } from "../../../styled-system/css";
import { HStack, styled } from "../../../styled-system/jsx";

const navbarReceipt = cva({
  base: {
    w: "full",
    h: "16",
    px: "16",
    py: "2",
  },
  variants: {
    visual: {
      light: {
        bgColor: "slate.100",
      },
      dark: {
        bgColor: "slate.700",
      }
    },
  }
})

export const StyledNavbar = styled(HStack, navbarReceipt)