import './App.css';

import React, { Fragment } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import Button from "./Components/button/button";

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Button>Kliknij mnie!</Button>
    </Fragment>
  );
}

export default App;
