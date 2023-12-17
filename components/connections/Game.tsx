'use client'

import { useEffect, useState } from "react";
import squareData from "@/data/connections/squares.json";
import Buttons from "./Buttons";
import Grid from "./Grid";
import { CorrectGuessDetails, SquareData } from "@/types/connections/connections";
import CorrectGuessDisplay from "./CorrectGuessDisplay";
import IncorrectGuesses from "./IncorrectGuesses";
import GameWon from "./GameWon";

const initialSquareData: SquareData[] = squareData.map((square) => ({
    ...square,
    selected: false,
    isCorrect: false
}));

const shuffleArray = (array: SquareData[]): SquareData[] => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Game = () => {
    const [squares, setSquares] = useState<SquareData[]>(initialSquareData);
    const [correctGuessDetails, setCorrectGuessDetails] = useState<CorrectGuessDetails[]>([]);
    const [incorrectGuessCount, setIncorrectGuessCount] = useState<number>(0);
    const [isGameWon, setIsGameWon] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);

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
        const shuffledSquares = shuffleArray(squares);
        setSquares(shuffledSquares);
    };

    const clearSquares = () => {
        const deselectedSquares = squares.map(square => ({ ...square, selected: false }));
        setSquares(deselectedSquares);
    };

    const handleSubmit = () => {
        const selectedSquares = squares.filter(square => square.selected);

        if (selectedSquares.length !== 4) {
            alert("Please select exactly 4 squares.");
            return;
        }

        const allSameCategory = selectedSquares.every(square =>
            square.category === selectedSquares[0].category);

        if (allSameCategory) {
            const newGuess = {
                category: selectedSquares[0].category,
                words: selectedSquares.map(square => square.text)
            };

            const remainingSquares = squares.filter(square => !square.selected);

            setSquares(remainingSquares);
            setCorrectGuessDetails([...correctGuessDetails, newGuess]);

            if (remainingSquares.length == 0) {
                setIsGameWon(true);
            }
        } else {
            setIncorrectGuessCount(prevCount => prevCount + 1);

            // Deselect all squares
            const deselectSquares = squares.map(square => ({
                ...square,
                selected: false
            }));
            setSquares(deselectSquares);
        }
    };

    const handleReset = () => {
        setSquares(initialSquareData);
        setCorrectGuessDetails([]);
        setIncorrectGuessCount(0);
        setIsGameWon(false);
    };

    useEffect(() => {
        setSquares(shuffleArray(initialSquareData));
        setIsLoading(false);
    }, []);

    return (
        <div>
            {isLoading ? (
                <p className="text-lg flex items-center justify-center h-60">Loading game...</p>
            ) : (
                <>
                    <CorrectGuessDisplay guesses={correctGuessDetails} />
                    <Grid squares={squares} handleSquareClick={handleSquareClick} />
                    {isGameWon ? (
                        <GameWon incorrectGuessCount={incorrectGuessCount} handleReset={handleReset} />
                    ) : (
                        <>
                            <Buttons shuffleSquares={shuffleSquares} clearSquares={clearSquares} handleSubmit={handleSubmit} />
                            <IncorrectGuesses incorrectGuessCount={incorrectGuessCount} />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Game;