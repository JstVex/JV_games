'use client'

import { useEffect, useState } from "react";
import Game from "@/components/spelling-bee/Game";

const SpellingBee = () => {
    const [gameData, setGameData] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/spelling-bee');
                const data = await response.json();
                setGameData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">
                    Spelling Bee
                </h1>
                <p className="text-base text-zinc-600">
                    A game where you try to spell words with the letters provided.
                </p>
            </div>
            <div>
                {gameData ? (
                    <Game data={gameData.yesterday} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default SpellingBee;