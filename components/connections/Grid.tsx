import { SquareData } from "@/types/connections/connections";
import Square from "./Square";

interface GridProps {
    squares: SquareData[];
    handleSquareClick: (id: number) => void;
}

const Grid: React.FC<GridProps> = ({ squares, handleSquareClick }) => {
    return (
        <div className="grid grid-cols-4 gap-4 px-4 py-1">
            {squares.map((square) => (
                <div className={`square`} key={square.id}>
                    <Square square={square} onClick={() => handleSquareClick(square.id)} />
                </div>
            ))}
        </div>
    );
}

export default Grid;