import { SquareData } from "@/types/connections/connections";

interface SquareProps {
    square: SquareData;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ square, onClick }) => {
    return (
        <div
            className={`p-6 text-center cursor-pointer rounded-lg transition-all duration-300 font-semibold text-lg 
                active:scale-90 transform select-none
                ${square.selected ? 'bg-zinc-800 text-white' : 'bg-zinc-100'}`}
            onClick={onClick}
        >
            {square.text}
        </div>
    );
}

export default Square;