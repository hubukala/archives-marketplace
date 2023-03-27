import styled from "styled-components";

const ButtonPrimary = styled.button`
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #c5c5c5;
  background-color: white;
  transition: all 0.3s;
  &:hover {
      background-color: #e7e7e7;
      border: 1px solid blue;
      cursor: pointer;
  }
`

export { ButtonPrimary };