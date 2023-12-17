import Game from "@/components/connections/Game";

const Connections = () => {
    return (
        <div>
            <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">
                    Connections
                </h1>
                <p className="text-base text-zinc-600">
                    Group words that share a common category
                </p>
            </div>
            <Game />
        </div>
    );
}

export default Connections;