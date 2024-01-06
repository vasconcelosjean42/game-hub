import { cva } from "../../../styled-system/css";
import { HStack, styled } from "../../../styled-system/jsx";

const navbarReceipt = cva({
  base: {
    w: "full",
    h: "16",
    px: "16",
    py: "2",
    gap: "10",
  },
  variants: {
    visual: {
      light: {
        backgroundColor: "slate.100",
      },
      dark: {
        backgroundColor: "slate.700",
      }
    },
  }
})

export const StyledNavbar = styled(HStack, navbarReceipt)