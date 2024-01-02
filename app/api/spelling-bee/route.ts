export async function GET() {
    try {
        const response = await fetch('https://www.nytimes.com/puzzles/spelling-bee');
        const text = await response.text();
        const start = text.indexOf("gameData") + 11;
        const end = text.indexOf("}}", start) + 2;
        const data = JSON.parse(text.slice(start, end));

        return Response.json(data);
    } catch (error) {
        return Response.json(error);
    }
}