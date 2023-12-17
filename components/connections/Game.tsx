'use client'

import { useState } from "react";
import squareData from "@/data/connections/squares.json";
import Buttons from "./Buttons";
import Grid from "./Grid";
import { SquareData } from "@/types/connections/connections";

const initialSquareData: SquareData[] = squareData.map((square) => ({
    ...square,
    selected: false,
    isCorrect: false
}));


const Game = () => {
    const [squares, setSquares] = useState<SquareData[]>(initialSquareData);

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

    const shuffleSquares = () => {
        let shuffledSquares = [...squares];
        for (let i = shuffledSquares.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledSquares[i], shuffledSquares[j]] = [shuffledSquares[j], shuffledSquares[i]];
        }
        setSquares(shuffledSquares);
    };

    const clearSquares = () => {
        const deselectedSquares = squares.map(square => ({ ...square, selected: false }));
        setSquares(deselectedSquares);
    };

    const handleSubmit = () => {
        const selectedSquares = squares.filter(square => square.selected);

        if (selectedSquares.length !== 4) {
            alert("Please select exactly 4 squares");
            return;
        }

        const allSameCategory = selectedSquares.every(square =>
            square.category === selectedSquares[0].category);

        if (allSameCategory) {
            const remainingSquares = squares.filter(square => !square.selected);

            setSquares(remainingSquares);
        } else {
            alert("Incorrect");
        }
    };

    return (
        <div>
            <Grid squares={squares} handleSquareClick={handleSquareClick} />
            <Buttons shuffleSquares={shuffleSquares} clearSquares={clearSquares} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Game;