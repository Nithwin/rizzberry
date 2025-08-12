"use client";
import { Sparkles } from "lucide-react";
import { Copy } from "lucide-react";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { model, pickupLineSchema } from "@/lib/gemini/geminiClient";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

const Hero = () => {
  const [generatedText, setGeneratedText] = useState(
    "All the good pick up lines are taken but you aren't."
  );
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCopy = () => {
    if (generatedText) copy(generatedText);
    alert("Clipboard Copied Successfully...");
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const prompt = `Generate a single, creative, unique pickup line for the theme: "${
        userInput || "general"
      }". 
    Make it different every time, no matter how similar the input is.
    Include playful twists, wordplay, or unexpected humor. 
    Current time: ${new Date().toISOString()}.
    Respond in JSON with 'line' and 'category' fields.`;

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],

        generationConfig: {
          temperature: 1.3, // higher = more randomness
          topP: 0.9,
          topK: 40,
          responseMimeType: "application/json",
          responseSchema: pickupLineSchema,
        },
      });

      console.log("Full Gemini result:", JSON.stringify(result, null, 2));

      const part = result.response.candidates?.[0]?.content?.parts?.[0];
      let parsedResponse: any = null;

      if (part?.functionCall?.args) {
        parsedResponse = part.functionCall.args;
      } else if (part?.text) {
        try {
          parsedResponse = JSON.parse(part.text);
        } catch (e) {
          console.error("Error parsing part.text:", e);
        }
      }

      console.log("Parsed response object:", parsedResponse);

      if (parsedResponse?.line) {
        setGeneratedText(parsedResponse.line);
        const docRef = await addDoc(collection(db, "responses"), {
          prompt: userInput,
          pickupline: generatedText,
        });
      } else {
        setGeneratedText("Failed to generate. Try a different input!");
      }
    } catch (err: any) {
      console.error("Error generating content:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[80dvh]">
      <div className="relative px-[10px] flex flex-col gap-[1.5rem] lg:gap-[1rem]">
        <div className="absolute h-32 -left-16 -top-24 lg:top-0 mx-auto lg:-left-[13rem]">
          <DotLottieReact src="love.lottie" loop autoplay />
        </div>
        <div className="absolute w-36 lg:w-48 left-26 -top-17 -right-28 lg:top-[3rem] mx-auto lg:-right-[45rem]">
          <DotLottieReact
            src="emoji.lottie"
            className="h-full w-full"
            loop
            autoplay
          />
        </div>
        <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[2rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
        <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[12rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
        <div className="flex flex-col gap-[1.7rem] ">
          <p className="text-4xl lg:text-6xl text-center max-w-[40rem] mx-auto font-bold bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] text-transparent bg-clip-text font-poppins">
            Unleash Your Inner Charmer
          </p>

          <p className="text-sm lg:text-lg max-w-[40rem] text-center px-3 text-gray-400">
            Tired of lame pick-up lines? Our AI crats witty, charming, and
            irresistible openers that actually work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-[1.5rem] items-center py-[1rem]">
          <div className="bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] rounded-full w-fit p-[2px]">
            <input
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              type="text"
              className="outline-none px-6 py-3 w-full text-white bg-[#10011C] rounded-full"
              placeholder="Type your vibe or keyboard..."
              required
            />
          </div>
          <button
            onClick={handleGenerateClick}
            className="cursor-pointer hover:scale-105 transition-transform delay-150 ease-in flex items-center bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] px-[1.5rem] text-xl font-medium font-poppins py-3 rounded-full gap-[0.5rem]"
          >
            <Sparkles />
            <span>Generate</span>
          </button>
        </div>

        <div>
          <div className="px-[1rem] relative py-[1rem] border-2 border-purple-700 rounded-2xl bg-purple-950/25 backdrop-blur-3xl">
            <Copy
              onClick={handleCopy}
              className="absolute right-2 top-2 text-pink-500/80 cursor-pointer"
            />
            <p className="text-center text-lg pt-4">
              <q>{generatedText}</q>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
