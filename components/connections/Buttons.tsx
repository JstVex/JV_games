interface ButtonsProps {
    shuffleSquares: () => void;
    clearSquares: () => void;
    handleSubmit: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ shuffleSquares, clearSquares, handleSubmit }) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="flex gap-2">
                <button className="px-4 py-2 font-semibold text-white bg-zinc-600 rounded-lg" onClick={shuffleSquares}>
                    Shuffle
                </button>
                <button className="px-4 py-2 font-semibold text-white bg-zinc-600 rounded-lg" onClick={clearSquares}>
                    Clear
                </button>
            </div>
            <button className="px-4 py-2 font-semibold text-white bg-zinc-600 rounded-lg" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Buttons;