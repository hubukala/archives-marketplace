import { Search, SearchInput } from '../styles/searchbar/SearchBarStyles'
import { ButtonPrimary } from '../styles/shared/buttons/ButtonPrimary';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [currentInputField, setInputField] = useState('');
  const navigate = useNavigate();

  const SearchBarClick = (inputId) => {
    (navigate(`/shop/search/${inputId}`));
    setInputField('');
  }
  
  const SearchBarInfo = (e) => {
    setInputField(e.target.value);
  }
  return (
    <Search>
      <SearchInput type="text" placeholder="Search" value={currentInputField} onChange={SearchBarInfo} />
      <ButtonPrimary onClick={() => SearchBarClick(currentInputField)} type="submit">SEARCH</ButtonPrimary>
    </Search>
  )
}

export default SearchBar;