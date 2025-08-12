"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // This object should match your EmailJS template variables
    const templateParams = {
      name,
      message,
    };

    emailjs
      .send(
        "service_en7agpe", // Your EmailJS Service ID
        "template_5mts4oq", // Your EmailJS Template ID
        templateParams,
        "n9BMUlYrDHsfC7l8Z" // Your EmailJS Public Key
      )
      .then(() => {
        setStatus("✅ Feedback sent successfully!");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ Failed to send feedback.");
      });
  };

  return (
    <section className="flex items-center justify-center min-h-[80dvh]">
      <div className="px-[0.5rem] flex flex-col gap-[2rem] w-full max-w-lg">
        <div>
          <p className="text-4xl font-poppins text-center font-bold bg-gradient-to-l text-transparent bg-clip-text from-[#A100FF] to-[#FE00AD]">
            We'd love your feedback!
          </p>
          <p className="text-sm text-gray-400 text-center">
            Help us improve RizzBerry. Your feedback is invaluable to us and
            helps.
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="p-4 flex flex-col gap-[2rem] border-purple-900 border rounded-2xl"
        >
                      <div className="flex flex-col gap-3">
            <label htmlFor="feedback" className="text-lg">
              Name
            </label>
            <input
              id="feedback"
              required
              placeholder="Enter your name..."
              className="border border-gray-300 rounded-xl px-4 py-2 resize-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="feedback" className="text-lg">
              What could we improve?
            </label>
            <textarea
              id="feedback"
              required
              placeholder="Enter your message..."
              className="border border-gray-300 rounded-xl h-[10rem] px-4 py-2 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>


          <div>
            <button
              type="submit"
              className="w-full bg-purple-800 rounded-xl py-3 font-semibold font-poppins text-lg text-white"
            >
              Send Feedback
            </button>
          </div>

          {status && (
            <p className="text-sm text-center mt-2 text-gray-500">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Hero;
