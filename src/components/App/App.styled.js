import styled from "styled-components";

const App = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
`
const TitleInfo = styled.h2`
   text-align: center;
   color: grey;
   font-size: 26px;
   font-weight: 400;
`
export {App, TitleInfo};