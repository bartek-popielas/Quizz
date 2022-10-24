import './App.css';

import React, { Fragment } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import Container from "./Components/container/container"
import Header from "./containers/header/header";
import Button from "./Components/button/button";

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
        <Container>
            <Header/>
            <Button/>
        </Container>




    </Fragment>
  );
}

export default App;
