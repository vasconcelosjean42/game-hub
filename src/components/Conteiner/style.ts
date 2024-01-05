import { cva } from "../../../styled-system/css";

export const conteinerReceipt = cva({
  base: {
    display: "flex",
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