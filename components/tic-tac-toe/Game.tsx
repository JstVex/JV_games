'use client'

import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import { CellValue, Cells } from "@/types/tic-tac-toe/tic-tac-toe";

const Game = () => {
    const [cells, setCells] = useState<Cells>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<CellValue>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);

    const handleCellClick = (index: number) => {
        if (cells[index] !== null) {
            return;
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

    useEffect(() => {
        const winner = checkForWinner(cells);
        setWinner(winner);

        if (!winner && !cells.includes(null)) {
            setIsDraw(true);
        } else {
            setIsDraw(false);
        }
    }, [cells]);


    return (
        <div className="flex flex-col justify-center items-center mt-20">
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