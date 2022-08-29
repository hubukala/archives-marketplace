import ProductList from "../data/ProductList.json";
import MappingArray from "../shared/MapArray";
import { CategoryContent } from "../styles/CategoryContent";
import { ProductsContainer } from "../styles/ProductsContainer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import FilterArray from "../shared/FilterArray";
import FilterByTitle from "../shared/FilterByTitle";

const Shop = (propInput = 'none') => {
  const [currentCategory, setCategory] = useState("All");
  const [currentInput, setInput] = useState(propInput);
  
  const NewFilter = () => {
    if (currentCategory !== 'Search') {
      const filtered = FilterArray(currentCategory, ProductList);
      return(filtered)
    } else {
      const filtered = FilterByTitle(ProductList, currentInput);
      return(filtered)
    }
  }
  //const NewFilter = FilterArray(currentCategory, ProductList);
  const displayArray = MappingArray(NewFilter());

  return (
    <CategoryContent>
      <SideBar
        all={() => {setCategory("All"); setInput("none")}}
        tops={() => {setCategory("Tops"); setInput("none")}}
        bottoms={() => {setCategory("Bottoms"); setInput("none")}}
        sneakers={() => {setCategory("Footwear"); setInput("none")}}
        accessories={() => {setCategory("Accessories"); setInput("none")}}
        margiela={() => {setCategory("Search"); setInput('MARGIELA')}}
      />
      <ProductsContainer>
        {displayArray}
      </ProductsContainer>
    </CategoryContent>
  );
};

export default Shop;