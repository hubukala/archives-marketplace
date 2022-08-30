import styled from "styled-components";

const ButtonSecondary = styled.button`
  margin-left: auto;
  margin-right: 0;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #c5c5c5;
  background-color: #212121;
  transition: all 0.3s;
  color: #ededed;
  &:hover {
      background-color: #3c3c3c;
      border: 1px solid blue;
      color:white;
  }
`

export { ButtonSecondary };