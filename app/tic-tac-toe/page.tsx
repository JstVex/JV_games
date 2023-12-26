import Game from "@/components/tic-tac-toe/Game";

const TicTacToe = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">
                    Tic Tac Toe
                </h1>
                <p className="text-base text-zinc-600">
                    Get three in a row
                </p>
            </div>
            <Game />
        </div>
    );
}

export default TicTacToe;