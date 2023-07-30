import styled from "styled-components";

const ButtonSection = styled.div`
`

const ButtonWrapper = styled.span`
`

const StyledButtonProduct = styled.button`
    display: block;
    width: 30%;
    height: 40px;
    margin: 0.6rem;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 1px solid #c5c5c5;
    transition: all 0.3s;
    font-size: 15px;
    font-weight: bold;
    &:hover:enabled {
        background-color: #e7e7e7;
        border: 1px solid black;
        cursor: pointer;
    }
    &:disabled {
        cursor: not-allowed
    }
`

export { StyledButtonProduct, ButtonWrapper, ButtonSection };