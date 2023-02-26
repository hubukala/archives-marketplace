import { StyledButtonProduct } from "../styles/shared/buttons/ButtonProductStyles";

const ButtonProduct = (props) => {
    return (
        <StyledButtonProduct onClick={props.handleOnClick}>{props.label}</StyledButtonProduct>
    )
}

export default ButtonProduct;