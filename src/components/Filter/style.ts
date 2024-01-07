import { cva } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

const filterReceipt = cva({
  base: { borderRadius:"md", p: 2, fontWeight: "semibold"},
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

export const StyledFilter = styled('select', filterReceipt)
