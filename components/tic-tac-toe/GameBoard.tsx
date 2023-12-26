import { Cells } from '@/types/tic-tac-toe/tic-tac-toe';

interface GameBoardProps {
    cells: Cells;
    onCellClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cells, onCellClick }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {cells.map((cell, index) => (
                <div
                    key={index}
                    className="w-24 h-24 bg-gray-200 flex justify-center items-center text-2xl cursor-pointer"
                    onClick={() => onCellClick(index)}
                >
                    {cell}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;