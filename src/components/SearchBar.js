import { Search, SearchInput, SearchButton } from '../styles/SearchBarStyles'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [currentInputField, setInputField] = useState('')
  const navigate = useNavigate();

  const SearchBarClick = (inputId) => {
    console.log(inputId)
    (navigate(`/shop/search/${inputId}`))
    // return(navigate(`/shop/${currentInputField}`, {state:{input: currentInputField.toUpperCase()}}));
  }
  const SearchBarInfo = (e) => {
    setInputField(e.target.value);
  }
  return (
    <Search>
      <SearchInput type="text" placeholder="Search" onChange={SearchBarInfo} />
      <SearchButton onClick={() => SearchBarClick(currentInputField)} type="submit">SEARCH</SearchButton>
    </Search>
  )
}

export default SearchBar;