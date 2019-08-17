import React, { Component } from 'react'
import Intro from 'containers/Intro'
import AboutMe from 'containers/AboutMe'

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Intro />
        <AboutMe />
      </React.Fragment>
    )
  }
};

export default App
