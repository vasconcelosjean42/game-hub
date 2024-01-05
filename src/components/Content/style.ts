import { cva } from "../../../styled-system/css";

export const contentReceipt = cva({
  base: {
    display: "flex",
    flexDirection: "column",
  },
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