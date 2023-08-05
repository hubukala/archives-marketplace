import styled from 'styled-components';

const PostedItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 350px;
    background-color: #e8e8e8;
    border-radius: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    min-width: 280px;
`;

const PostedItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const ContentWrapper = styled.div`
    margin-bottom: 20px;
`;

export { PostedItemContainer, PostedItemWrapper, ContentWrapper };
