import styled from 'styled-components';

const Search = styled.fieldset`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: solid black 1px;
  padding: 2px;
  width: 40vw;
  border-radius: 3px;
`

const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  text-indent: 0.5rem;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 0;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #c5c5c5;
  background-color: white;
  transition: all 0.3s;
  &:hover {
      background-color: #e7e7e7;
      border: 1px solid black;
  }
`

export { Search, SearchInput, SearchButton };