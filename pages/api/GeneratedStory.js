import { Configuration, OpenAIApi } from "openai";
import { v4 as uuidv4 } from "uuid";

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
    const imageUrl = data.data[0]?.url;
    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function uploadImageToCloudinary(imageUrl) {
  const formData = new FormData();
  formData.append("file", imageUrl);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
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

    const coverImage = await generateCoverImage(
      generatedStory.coverImagePrompt
    );
    console.log(coverImage);

    const uploadedImageUrl = await uploadImageToCloudinary(coverImage);
    console.log(uploadedImageUrl);

    const newStory = {
      id: uuidv4(),
      title: generatedStory.title,
      coverImage: uploadedImageUrl,
      textContent: generatedStory.textContent,
      dateCreated: new Date().toLocaleDateString(),
    };

    res.status(200).json(newStory);
    console.log(newStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate story" });
  }
}
