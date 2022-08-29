import { useParams } from 'react-router-dom';
import ProductList from "../data/ProductList.json"
import MappingArray from '../shared/MapArray';
import HomeSection from "../styles/HomeSection";

import styled from 'styled-components';

const HeadTwo = styled.h2`
  margin-left: 2rem;
`

const RecentlyStyledContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin-left: 1rem;
`

const SearchResults = () => {
    const {inputId} = useParams();
    const product = ProductList.filter((product) => product.title.includes(inputId.toLocaleUpperCase()));
    const displayArray = MappingArray(product)
    return (
        <HomeSection>
            <HeadTwo>Search results for '{inputId}'</HeadTwo>
            <RecentlyStyledContainer>
                {displayArray}
            </RecentlyStyledContainer>
        </HomeSection>
    )
}

export default SearchResults;