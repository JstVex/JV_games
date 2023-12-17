import Link from "next/link";

interface CardProps {
    name: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ name, description, link }) => {
    return (
        <div className="w-72 h-80 ring-1 ring-zinc-300 m-3 rounded-xl">
            <div className="bg-black text-white h-1/2 rounded-t-xl p-4 flex items-center justify-center">
                <h2 className="text-3xl font-bold">
                    {name}
                </h2>
            </div>
            <div className="p-4 h-1/2 flex flex-col items-center justify-between">
                <p className="text-zinc-500 text-sm text-center">
                    {description}
                </p>
                <Link href={link} className="ring-1 ring-zinc-300 rounded-full p-3 w-full text-center">
                    Play
                </Link>
            </div>
        </div>
    );
}

export default Card;