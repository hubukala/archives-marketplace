import { StyledButtonProduct } from "../styles/shared/buttons/ButtonProductStyles";

const ButtonProduct = (props) => {
    return (
        <StyledButtonProduct>{props.label}</StyledButtonProduct>
    )
}

export default ButtonProduct;