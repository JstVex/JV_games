import Card from "@/components/Card"

const games: { name: string, description: string, link: string }[] = [
  {
    name: "Connections",
    description: "Group words that share a common category",
    link: "/connections"
  },
  {
    name: "Spelling bee",
    description: "Spell as many words as you can from a list of letters",
    link: "/spelling-bee"
  },
  {
    name: "Sudoku",
    description: "Fill in the grid so that every row, column, and 3x3 box contains the digits 1 through 9",
    link: "/sudoku"
  },
  {
    name: "Tic tac toe",
    description: "Get three in a row",
    link: "/tic-tac-toe"
  },
  {
    name: "Hangman",
    description: "Classic game of guessing a word",
    link: "/hangman"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">
        JV/Games
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {games.map((game) => (
          <Card
            key={game.name}
            name={game.name}
            description={game.description}
            link={game.link}
          />
        ))}
      </div>
    </div>
  )
}
