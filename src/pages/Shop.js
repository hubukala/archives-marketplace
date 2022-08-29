import ProductList from "../data/ProductList.json";
import MappingArray from "../shared/MapArray";
import { CategoryContent } from "../styles/CategoryContent";
import { ProductsContainer } from "../styles/ProductsContainer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import FilterArray from "../shared/FilterArray";

const Shop = () => {
  const [currentCategory, setCategory] = useState("All");

  const NewFilter = FilterArray(currentCategory, ProductList);
  const displayArray = MappingArray(NewFilter);

  return (
    <CategoryContent>
      <SideBar
        all={() => {setCategory("All")}}
        tops={() => {setCategory("Tops")}}
        bottoms={() => {setCategory("Bottoms")}}
        sneakers={() => {setCategory("Footwear")}}
        accessories={() => {setCategory("Accessories")}}
      />
      <ProductsContainer>
        {displayArray}
      </ProductsContainer>
    </CategoryContent>
  );
};

export default Shop;