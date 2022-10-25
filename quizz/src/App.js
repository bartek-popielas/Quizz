import './App.css';

import React, { Fragment } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import Container from "./Components/container/container"
import Header from "./containers/header/header";
import Button from "./Components/button/button";
import Content from "./containers/content/content";

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
        <Container>
            <Header/>
            <Content/>

        </Container>




    </Fragment>
  );
}

export default App;
