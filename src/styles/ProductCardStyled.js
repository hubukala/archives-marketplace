import styled from "styled-components";

const ProductCardStyled = styled.div`
  display: block;
  text-align: left;
  margin: 1.5rem;
  width: 15%;
  height: 260px;
  box-sizing: border-box;
  font-size: 11px;
  //border: solid 1px black;
  &:hover {
    cursor: pointer;
  }
`

export { ProductCardStyled };