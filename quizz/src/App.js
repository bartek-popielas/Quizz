import './App.css';

import React, { Fragment } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import Container from "./Components/container/container"
import Header from "./containers/header/header";
import Content from "./containers/content/content";
import StepInfo from "./containers/stepInfo/stepInfo";
import { StepContext } from "./containers/context/themeContext";
import { Button } from "./Components/button/button"

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
        <Container>
            <Header/>
            <Content/>
            <StepInfo/>
        </Container>
    </Fragment>
  );
}

export default App;
