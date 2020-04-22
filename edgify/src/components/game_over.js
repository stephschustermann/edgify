import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import * as styles from '../styles';
import initGame from '../store/actions/init_game';

class gameOver extends Component {
    render() {
    return (<Container style={styles.centerContainer}>
            <h1> GAME OVER! </h1>
            <p>Player {this.props.winner} win!</p>
            <Button className='btn btn-light text-secondary' onClick={() => this.props.initGame()}> Start new game!</Button>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
      winner: state.game.winner+1,
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        initGame: () => dispatch(initGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(gameOver);