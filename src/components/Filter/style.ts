import { cva } from "../../../styled-system/css";

export const filterReceipt = cva({
  base: {
    padding: "2",
    borderRadius: "lg",
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
    space: {
      m: {
        marginRight: "4"
      }
    }
  }
})