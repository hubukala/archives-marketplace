import styled from "styled-components";

const InputStyles = [`
  width: 100%;
  border: 1px solid grey;
  height: 2.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-indent: 5px;
  border-radius: 5px;
  color: black;
  font-family: 'Helvetica';
`]

const InputMain = styled.input(InputStyles);

const InputSelect = styled.select(InputStyles);

const InputTextArea = styled.textarea`
  width: 100%;
  border: 1px solid black;
  height: 10rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-family: 'Helvetica';
  font-style: italic;
  padding-top: 8px;
  padding-left: 8px;
`

export { InputMain,InputSelect,InputTextArea };