import styled from 'styled-components';

const InputStyles = [
    `
  width: auto;
  border: 1px solid grey;
  height: 2.5rem;
  text-indent: 5px;
  border-radius: 5px;
  color: black;
  font-family: 'Helvetica';
`,
];

const InputsSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputMain = styled.input(InputStyles);

const InputSelect = styled.select(InputStyles);

const InputTextArea = styled.textarea`
    border: 1px solid black;
    height: 10rem;
    border-radius: 5px;
    font-family: 'Helvetica';
    font-style: italic;
`;

export { InputMain, InputSelect, InputTextArea, InputsSection };
