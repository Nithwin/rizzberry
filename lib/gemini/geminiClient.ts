import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai";

const API_KEY: any = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
export const model = new GoogleGenerativeAI(API_KEY).getGenerativeModel({
  model: "gemini-1.5-flash"
});

export const pickupLineSchema: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    line: { type: SchemaType.STRING },
    category: { type: SchemaType.STRING },
  },
  required: ["line", "category"],
};
