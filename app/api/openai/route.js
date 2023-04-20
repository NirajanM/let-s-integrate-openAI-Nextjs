import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req, res) {
    const data = await req.json();

    if (data.prompt !== undefined) {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${data.prompt}`,
        });
        console.log(completion.data.choices[0].text);
        return new Response(JSON.stringify({ text: `${completion.data.choices[0].text}` }))
    } else {
        return new Response(JSON.stringify({ text: "No prompt provided." }))
    }
}