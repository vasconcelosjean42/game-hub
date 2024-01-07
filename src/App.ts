import { cva } from "../styled-system/css"
import { Stack, styled } from "../styled-system/jsx"
    
const textReceipt = cva({
  variants:{
    size: {
      h1: {
        fontSize: "5xl",
        fontWeight: "bold"
      },
      h2: {
        fontSize: "3xl",
        fontWeight: "semibold",
      }
    }
  }
})

const appReceipt = cva({
  base: {
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

export const StyledText = styled('p', textReceipt)

export const StyledApp = styled(Stack, appReceipt)