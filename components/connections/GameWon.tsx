interface GameWonProps {
    incorrectGuessCount: number;
    handleReset: () => void;
}

const GameWon: React.FC<GameWonProps> = ({ incorrectGuessCount, handleReset }) => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <p className="text-xl">
                You won in {incorrectGuessCount + 1} tries!
            </p>
            <button onClick={handleReset} className="p-2 bg-zinc-600 text-white rounded-lg w-auto">
                Reset
            </button>
        </div>
    );
}

export default GameWon;