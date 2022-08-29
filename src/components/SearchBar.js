import { Search, SearchInput, SearchButton } from '../styles/SearchBarStyles'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [currentInputField, setInputField] = useState('')
  const navigate = useNavigate();
  const SearchBarClick = () => {
    console.log(currentInputField)
    return(navigate('/signup', {state:{input: currentInputField.toUpperCase()}}));
  }
  const SearchBarInfo = (e) => {
    setInputField(e.target.value);
  }
  return (
    <Search>
      <SearchInput type="text" placeholder="Search" onChange={SearchBarInfo} />
      <SearchButton onClick={() => SearchBarClick()} type="submit">SEARCH</SearchButton>
    </Search>
  )
}

export default SearchBar;