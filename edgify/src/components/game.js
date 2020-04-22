import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as styles from '../styles';
import CardsLayout from './cards_layout';
import endTurn from '../store/actions/end_turn';
import initGame from '../store/actions/init_game';

class game extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false, 
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentCards.length !== this.props.currentCards.length  && this.props.currentCards.length === 2) {
          const isMatch = this.props.currentCards[0].url === this.props.currentCards[1].url;
          this.props.endTurn(isMatch);
        }
    }

    render() {
        return (<Container>
            <Row style={styles.gameRowLayout}>
                <Col className='display-4' md="auto"> Player 1: </Col>
                <Col className='display-4' md="auto">{this.props.scores[0]}</Col>
                <Col></Col>
                <Col className='display-4' md="auto"> Player 2: </Col>
                <Col className='display-4' md="auto">{this.props.scores[1]}</Col>
            </Row>
            <Row style={styles.gameRowLayout}>
                <CardsLayout /> 
            </Row>
            <Row style={styles.gameRowLayout}>
                <Col className='text-secondary'>Player {this.props.currentPlayer+1}'s Turn</Col>
            </Row>
        </Container>)
    }
}

function mapStateToProps(state) {
    return {
        currentCards: state.cards.current_cards,
        currentPlayer: state.game.currentPlayer,
        scores: state.game.scores,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initGame: () => dispatch(initGame()),
        endTurn: (isMatch) => dispatch(endTurn(isMatch)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(game);
