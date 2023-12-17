import { CorrectGuessDetails } from "@/types/connections/connections";

interface CorrectGuessDisplayProps {
    guesses: CorrectGuessDetails[];
}

const CorrectGuessDisplay: React.FC<CorrectGuessDisplayProps> = ({ guesses }) => {
    return (
        <div className="p-4 flex flex-col gap-4">
            {guesses.map((guess, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-green-300 p-6 rounded-lg">
                    <div className="text-lg font-bold">{guess.category}</div>
                    <ul className="flex gap-x-5">
                        {guess.words.map((word, wordIndex) => (
                            <li key={wordIndex} className="text-sm">{word}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default CorrectGuessDisplay;