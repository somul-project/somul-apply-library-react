import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui";
import Form from "./components/Form";


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Form />
        </MuiThemeProvider>
    );
  }
}

export default App;
