'use client'

import { useState } from "react";
import squareData from "@/data/connections/squares.json";
import Grid from "./Grid";
import { SquareData } from "@/types/connections/connections";

const Game = () => {
    const [squares, setSquares] = useState<SquareData[]>(squareData.map((square) => ({
        ...square,
        selected: false,
        isCorrect: false
    })));

    const handleSquareClick = (id: number) => {
        // To ensure that only 4 squares can be selected at a time
        const selectedCount = squares.filter(square => square.selected).length;

        setSquares(squares.map(square => {
            if (square.id === id && (square.selected || selectedCount < 4)) {
                return { ...square, selected: !square.selected };
            }
            return square;
        }));
    };
    return (
        <div>
            <Grid squares={squares} handleSquareClick={handleSquareClick} />
        </div>
    );
}

export default Game;