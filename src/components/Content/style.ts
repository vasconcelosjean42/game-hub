import { cva } from "../../../styled-system/css";

export const contentReceipt = cva({
  base: {
    display: "flex",
    flexDirection: "row"
  },
  variants: {
    visual: {
      light: {
        backgroundColor: "slate.300"
      },
      dark: {
        backgroundColor: "slate.950"
      }
    },
  }
})