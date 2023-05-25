import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-KWKX4sUxoLRs3G6H2PQOR6oN",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateCoverImage(coverImagePrompt) {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        body: JSON.stringify({ prompt: coverImagePrompt, n: 1, size: "512" }),
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate the cover image");
    }

    const { image_url } = await response.json();
    return image_url;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export default async function handler(req, res) {
  try {
    const { prompt } = req.body;
    // const storyObjectPrompt = `You are a storyteller. Tell a story for children. The response should be a Json object, with the following properties: title: "here comes the generated Title", textContent: "here comes the generated Text", coverImagePrompt: "here comes the generated CoverImagePrompt" . Please use the following prompt: ${prompt}`;
    // console.log("Prompt:", prompt);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 700,
      temperature: 0,
    });
    console.log(completion.data);
    // console.log(completion.choices);
    // const generatedStory = completion.choices[0].text;
    // console.log("Generated Story:", generatedStory);
    // Generate the cover image using DALL·E API
    const coverImage = await generateCoverImage(generatedStory);

    // Process and manipulate the generatedStory and coverImage as needed

    res.status(200).json({ story: generatedStory, coverImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate story" });
  }
}
