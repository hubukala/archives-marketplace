import styled from 'styled-components';

const ButtonSection = styled.div`
    display: flex;
    gap: 4px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonWrapper = styled.span``;

const StyledButtonProduct = styled.button`
    display: block;
    min-width: 300px;
    height: 40px;
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
        cursor: not-allowed;
    }
`;

export { StyledButtonProduct, ButtonWrapper, ButtonSection };
