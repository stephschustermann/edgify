import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import * as styles from '../styles';
import initGame from '../store/actions/init_game';

class startGame extends Component {
    render() {
        return (
            <Container style={styles.centerContainer}>
                <h1> Start New Game </h1>
                <Button className='btn btn-light text-secondary' onClick={() => this.props.initGame()}> Click here to start!</Button>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initGame: () => dispatch(initGame()),
    }
}

export default connect(null, mapDispatchToProps)(startGame);
