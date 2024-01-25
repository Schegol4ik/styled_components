import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        
        li > a {
            color: #0db00d;
        }
        li + li {
            margin-left: 30px;
        }
    }
`