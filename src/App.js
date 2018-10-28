import React, { Component } from 'react';
import styled from 'styled-components';
//import Counter from './components/Counter'
import ChangeColor from './components/ChangeColor'
import Three from './components/three_redux'

class App extends Component {
  render() {
    return (
      <AppContainer>
	    <Three />
	    <ChangeColor />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  background: #456;
  border: none;
  display: flex;
  flex-direction: column;
  `
