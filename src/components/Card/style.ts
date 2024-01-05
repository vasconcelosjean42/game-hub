import { cva } from "../../../styled-system/css";

export const cardReceipt = cva({
  base: {
    width: "sm",
    height: "md",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2xl",
    marginRight: "4",
    marginBottom: "4",
  },
  variants: {
    visual: {
      light: {
        color: "slate.900",
        backgroundColor: "slate.300",
      },
      dark: {
        color: "slate.100",
        backgroundColor: "slate.900",
      }
    },
  }
})