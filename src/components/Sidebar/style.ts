import { cva } from "../../../styled-system/css";

export const sidebarReceipt = cva({
  base: {
    width: "1/6"
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