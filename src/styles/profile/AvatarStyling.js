import styled from 'styled-components';

const AvatarStyling = styled.img`
    border-radius: 50px;
    margin-right: 2rem;
    transition: all 0.3s;
    object-fit: cover;
    &:hover {
        cursor: pointer;
        opacity: 0.4;
    }
`;

export { AvatarStyling };
