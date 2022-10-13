import { createGlobalStyle } from "styled-components";

import BwModelica_Regular1 from "./BwModelica_Regular1.woff";
import BwModelica_Regular2 from "./BwModelica_Regular2.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Bw Modelica';
        src: local('Bw Modelica'), local('BwModelica'),
        url(${BwModelica_Regular2}) format('woff2'),
        url(${BwModelica_Regular1}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
