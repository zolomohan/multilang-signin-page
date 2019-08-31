import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <Page>
        <Navbar />
        <Form />
      </Page>
    );
  }
}

export default App;
