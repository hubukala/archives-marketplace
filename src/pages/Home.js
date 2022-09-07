import Image from "../assets/images/68532840.jpeg"
import ProductList from "../data/ProductList.json"
import HomeSection from "../styles/HomeSection";
import MappingArray from "../shared/MapArray";
import { HeadTwo } from "../styles/HeadTwo";
import { ProductListContainer } from "../styles/ProductListContainer";
import { ImageFullScreen } from "../styles/shared/images/ImageFullScreen";

const Home = () => {
  const MappedArray = MappingArray(ProductList);
  return (
    <HomeSection>
      <ImageFullScreen src={Image} alt="VW" />
      <HeadTwo>Recently Posted</HeadTwo>
      <ProductListContainer>
        {MappedArray}
      </ProductListContainer>
    </HomeSection>
  );
};

export default Home;