import React, {Component} from 'react';
import Router from "../Components/Router";
import GlobalSytles from "./GlobalStyles";


class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalSytles/>
      </>
    );
  }
}

export default App;
