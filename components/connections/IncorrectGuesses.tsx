interface IncorrectGuessesProps {
    incorrectGuessCount: number;
}

const IncorrectGuesses: React.FC<IncorrectGuessesProps> = ({ incorrectGuessCount }) => {
    return (
        <div className="p-4 text-lg">
            <span>Incorrect Guesses: {incorrectGuessCount}</span>
        </div>
    );
}

export default IncorrectGuesses;