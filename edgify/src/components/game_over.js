import React from "react";

const game_over = props => (
    <div>
        <title> Game Over </title>
        <p>{props.winnerName} win!</p>
    </div>
);
//TODO add end_game action in order to return to the initial state to start a new game
export default game_over