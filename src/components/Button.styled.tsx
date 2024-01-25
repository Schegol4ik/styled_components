import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.styled";


type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    typeBtn?: "outline" | "primary"
    active?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${({color}) => color || "aqua"};
    padding: 10px 20px;
    color: snow;
    font-size: ${({fontSize}) => `${fontSize}rem`};

    &:hover {
        background-color: #5b027c;
    }

    /* &:last-child {
         background-color: #3bff3b;
         
         &:hover {
         }
     }*/
    
    ${({typeBtn}) => typeBtn === 'outline' && css<StyledBtnPropsType>`
        border: 1px solid ${({color}) => color || "aqua"};
        color: ${({color}) => color || "blue"};
        background-color: transparent;
    `}
    
    ${({typeBtn}) => typeBtn === 'primary' && css<StyledBtnPropsType>`
        background-color: ${({color}) => color || "aqua"};
        color: snow;
    `}
    
    ${({active}) => active && css<StyledBtnPropsType>`
        box-shadow: 3px 3px 3px 3px rgba(23, 32, 56, 0.58);
    `}
`


export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: aqua;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out;
    }
`