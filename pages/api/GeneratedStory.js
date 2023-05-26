import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-KWKX4sUxoLRs3G6H2PQOR6oN",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateCoverImage(coverImagePrompt) {
  //   console.log(coverImagePrompt);
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        body: JSON.stringify({
          prompt: coverImagePrompt,
          n: 1,
          size: "512x512",
        }),
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate the cover image");
    }
    const data = await response.json();
    // return image_url;
    console.log(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}
export default async function handler(req, res) {
  try {
    const { prompt } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 700,
      temperature: 0,
    });
    const jsonString = completion.data.choices[0].text.replace(
      /(\w+):/g,
      '"$1":'
    );
    const generatedStory = JSON.parse(jsonString);
    console.log("Generated Story:", generatedStory);
    // const { title, textContent, coverImagePrompt } = generatedStory;

    const coverImage = await generateCoverImage(
      generatedStory.coverImagePrompt
    );

    res.status(200).json({ story: generatedStory, coverImage });
    console.log(generatedStory, coverImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate story" });
  }
}
