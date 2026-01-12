
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export async function getGriefReflection() {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Provide a short, 2-sentence comforting reflection on healing from grief, written in a poetic and minimalist style.",
    config: {
      systemInstruction: "You are a compassionate author named Shashika Ramesar, who wrote a book called 'Surviving Grief'. Your tone is empathetic, calm, and grounded. Use simple but profound language.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reflection: {
            type: Type.STRING,
            description: "A poetic reflection on grief.",
          },
          authorNote: {
            type: Type.STRING,
            description: "A short sign-off or note of encouragement.",
          },
        },
        required: ["reflection", "authorNote"]
      },
    },
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    return {
      reflection: "Healing is not a race, but a quiet walking home to yourself.",
      authorNote: "Take your time today."
    };
  }
}
