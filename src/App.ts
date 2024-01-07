import { cva } from "../styled-system/css"
import { styled } from "../styled-system/jsx"
    
const textH1Receipt = cva({
  base:{
    fontSize: "5xl",
    fontWeight: "bold"
  }
})

const textH2Receipt = cva({
  base:{
    fontSize: "3xl",
    fontWeight: "semibold",
  }
})

export const StyledH1 = styled('h1', textH1Receipt)

export const StyledH2 = styled('h2', textH2Receipt)