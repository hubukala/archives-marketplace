import styled from "styled-components";
import Image from "../assets/images/68532840.jpeg"
import ProductList from "../data/ProductList.json"
import HomeSection from "../styles/HomeSection";
import ProductCard from "../components/ProductCard";

const HeadTwo = styled.h2`
  margin-left: 2rem;
`

const ImageStyled = styled.img`
  width: 100%;
`

const RecentlyStyledContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin-left: 1rem;
`

const Home = () => {
  const MappedArray = ProductList.map(item => 
    <ProductCard
      key={item.id}
      image={item.image}
      title={item.title}
      size={item.size}
      price={item.price}
      id={item.id}
      category={item.category}
    />
  )
  return (
    <HomeSection>
      <ImageStyled src={Image} alt="VW" />
      <HeadTwo>Recently Posted</HeadTwo>
      <RecentlyStyledContainer>
        {MappedArray}
      </RecentlyStyledContainer>
    </HomeSection>
  );
};

export default Home;