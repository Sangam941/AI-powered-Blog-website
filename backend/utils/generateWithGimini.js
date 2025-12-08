import { config } from "dotenv";
config(); // Load environment variables from .env file
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const main = async (prompt) => {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return result.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate Gemini response: " + error.message);
  }
};
