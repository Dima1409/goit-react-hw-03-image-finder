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
   color: red;
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
`
export {App, TitleInfo, Spinner};