import styled from "styled-components";

const App = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
`
const TitleInfo = styled.h2`
   text-align: center;
`
const Spinner = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`
export {App, TitleInfo, Spinner};