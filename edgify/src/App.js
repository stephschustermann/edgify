import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import StartGame from './components/start_game';
import Game from './components/game';
import GameOver from './components/game_over';

class App extends Component {
  render(){
    return (
      <Container className="App">
        {
          (this.props.emptyGame)
          ? (<StartGame />) 
          : (this.props.isGameOver)
          ? (<GameOver/>)
          : (<Game />)
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    emptyGame: state.game.emptyGame,
    isGameOver: state.game.isGameOver,
  }
}

export default connect(mapStateToProps, null)(App);
