import { useParams } from 'react-router-dom';
import ProductList from "../data/ProductList.json"
import MappingArray from '../shared/MapArray';
import HomeSection from "../styles/HomeSection";
import { HeadTwo } from '../styles/HeadTwo';
import { ProductListContainer } from '../styles/ProductListContainer';

const SearchResults = () => {
    const {inputId} = useParams();
    const product = ProductList.filter((product) => product.title.includes(inputId.toLocaleUpperCase()));
    const displayArray = MappingArray(product)
    return (
        <HomeSection>
            <HeadTwo>Search results for '{inputId}'</HeadTwo>
            <ProductListContainer>
                {displayArray}
            </ProductListContainer>
        </HomeSection>
    )
}

export default SearchResults;