import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 12px;
    font-weight: bold;
    transition: all 0.2s;
    &:hover {
        color: blue;
    }
`;

export { Links };
