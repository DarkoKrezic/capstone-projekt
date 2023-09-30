import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-KWKX4sUxoLRs3G6H2PQOR6oN",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;
    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: "system",
          content:
            "Du bist Kindergeschichten erzähler. Du bekommst die Geschichte und den Veränderungswunsch vom User und schreibst das Ergebnis als Antwort. Du gibst immer nur die Antwort zurück also Die Geschichte mit Veränderungeno. ",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo",
      // prompt: prompt,
      max_tokens: 2000,
      top_p: 1,
      temperature: 0.8,
    });
    const jsonString = completion.data.choices[0].message.content;
    const formattedJsonString = jsonString.replace(/(\r\n|\n|\r)/gm, "");

    const newTextContent = formattedJsonString;
    res.status(200).json({ newTextContent: newTextContent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate story" });
  }
}
