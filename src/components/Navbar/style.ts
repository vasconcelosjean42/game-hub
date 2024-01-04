import { cva } from "../../../styled-system/css";

export const navbarReceipt = cva({
  base: {
    width: "full",
    height: "16",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    objectFit: "contain",
    paddingX: "20",
    paddingY: "2",
  },
  variants: {
    visual: {
      light: {
        backgroundColor: "slate.400",
      },
      dark: {
        backgroundColor: "slate.700",
      }
    },
  }
})