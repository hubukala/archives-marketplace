import { useParams } from 'react-router-dom';
import ProductList from "../data/ProductList.json"
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { ProductSection, GallerySection, ProductDescription, ProductDetails, ProductPrice } from '../styles/SingleProductStyles';
import ButtonProduct from '../components/ButtonProduct';
import { ButtonSection } from '../styles/shared/buttons/ButtonProductStyles';

const SingleProduct = () => {
    const {productId} = useParams();
    const product = ProductList.find((product) => product.id === productId);
    return (
        <ProductSection>
            {/* <ImageStyled src={product.image[0]} alt="display" /> */}
            <GallerySection>
                <ReactImageGallery items={product.image}/>
            </GallerySection>
            <ProductDescription>
                <h2>{product.title}</h2>
                <ProductDetails>SIZE: {product.size}</ProductDetails>
                <ProductDetails>CONDITION: {product.condition}</ProductDetails>
                <ProductPrice>$ {product.price}</ProductPrice>
            </ProductDescription>
            <ButtonSection>                
                <ButtonProduct label="PURCHASE"/>
                <ButtonProduct label="OFFER"/>
                <ButtonProduct label="MESSAGE"/>
            </ButtonSection>
        </ProductSection>
    );
};

export default SingleProduct;