'use client'

import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import { CellValue, Cells } from "@/types/tic-tac-toe/tic-tac-toe";

const Game = () => {
    const [cells, setCells] = useState<Cells>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<CellValue>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);
    const [isSinglePlayer, setIsSinglePlayer] = useState<boolean>(false);

    const handleCellClick = (index: number) => {
        if (cells[index] !== null || winner || isDraw || (isSinglePlayer && !isXNext)) {
            return; // Prevent move if the cell is occupied, or the game has ended
        }

        const newCells: Cells = [...cells];
        newCells[index] = isXNext ? 'X' : 'O';
        setCells(newCells);
        setIsXNext(!isXNext);
    };


    function checkForWinner(cells: Cells): CellValue {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6],            // Diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }

        return null;
    }

    const restartGame = () => {
        setCells(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    }

    const makeAIMove = () => {
        if (winner || isDraw) {
            return; // Prevent AI move if the game has ended
        }

        const emptyIndices = cells
            .map((cell, index) => (cell === null ? index : null))
            .filter((index) => index !== null);

        if (emptyIndices.length === 0) return;

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newCells = [...cells];
        newCells[randomIndex] = 'O'; // Assuming AI always plays 'O'
        setCells(newCells);
        setIsXNext(true); // Switch turn back to the human player
    };

    const changeMode = () => {
        setIsSinglePlayer(!isSinglePlayer);
        restartGame();
    }

    useEffect(() => {
        const winner = checkForWinner(cells);
        setWinner(winner);

        if (!winner && !cells.includes(null)) {
            setIsDraw(true);
        } else {
            setIsDraw(false);
        }

        if (isSinglePlayer && !isXNext && !winner && cells.includes(null)) {
            setTimeout(makeAIMove, 500);
        }
    }, [cells]);


    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <button
                className="mb-5 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                onClick={changeMode}>
                {isSinglePlayer ? 'Switch to Two-Player' : 'Switch to Single-Player'}
            </button>
            <GameBoard cells={cells} onCellClick={handleCellClick} />
            <button
                className="mt-6 bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
                onClick={restartGame}>
                Restart Game
            </button>
            {winner &&
                <p className="text-lg mt-4">
                    Winner: {winner}
                </p>
            }
            {isDraw && !winner &&
                <p className="text-lg mt-4">
                    It&apos;s a Draw!
                </p>
            }
        </div>
    );
}

export default Game;