import React, {useState} from 'react';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Button.styled";
import {Menu} from "./components/Menu.styled";
import {Link} from "./components/Link.styled";

const App = () => {

    const [valueInpt, setValueInpt] = useState('')
    const [valueInptSize, setValueInptSize] = useState('')

    return (
        <div>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                {/* <StyledBtn as='a' href="#">Link</StyledBtn>
                <StyledBtn as={Link} href="#">LinkComponent</StyledBtn>*/}
                <StyledBtn color={valueInpt} fontSize={valueInptSize} active>Hello</StyledBtn>
                <StyledBtn color={valueInpt}>Hello</StyledBtn>
                <StyledBtn color={valueInpt} typeBtn="outline">Hello</StyledBtn>
                <StyledBtn color={valueInpt} typeBtn="primary">Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <input
                    type="text"
                    value={valueInpt}
                    onChange={e => setValueInpt(e.target.value)}/>
                <input
                    type="text"
                    value={valueInptSize}
                    onChange={e => setValueInptSize(e.target.value)}/>

                {/*<SuperBtn>Super</SuperBtn>*/}
            </Box>
        </div>
    );
};

export default App;


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: cell;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

