import {keyframes} from "styled-components";

export const MyAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(360deg);

    }
    100% {
        transform: rotate(0deg);
    }
`