import { ProductCardStyled } from '../styles/ProductCardStyled';
import { ImageThumbnail } from '../styles/shared/images/ImageThumbnail';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate();
    const OpenProductPage = (id) => {
        navigate(`/shop/${id}`);
    };
    return (
        <ProductCardStyled onClick={() => OpenProductPage(props.id)}>
            <ImageThumbnail src={props.image} alt="image" />
            <br />
            {props.title}
            <br />
            {props.size}
            <br />$ {props.price}
            <br />
        </ProductCardStyled>
    );
};

export default ProductCard;
