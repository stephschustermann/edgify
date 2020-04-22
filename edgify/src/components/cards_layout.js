import React, { Component } from "react";
import { connect } from 'react-redux';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import * as styles from '../styles';
import openCard from '../store/actions/open_card';
import finishGame from '../store/actions/finish_game';

class cardsLayout extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.totalOpen !== this.props.totalOpen  && this.props.cards.length === this.props.totalOpen) {
          this.props.finishGame();
        }
    }

    render() {
        return (
            <CardColumns style={ { columnCount: this.props.cardsPerRow } }>
                {
                    this.props.cards.map((card, index) =>
                        <Card key={index} style={styles.card}>
                            {
                                (card.isOpen)
                                ? (<Card.Img src={card.url}/>)
                                : (<Button style={styles.card} onClick={()=>this.props.openCard(index)}/>)
                            }
                        </Card>)
                }
            </CardColumns>
        )
    }
}

function mapStateToProps(state) {
    return {
        cardsPerRow: state.cards.cardsPerRow,
        cards: state.cards.cards,
        totalOpen: state.cards.total_open,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openCard: index => dispatch(openCard(index)),
        finishGame: () => dispatch(finishGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cardsLayout);
