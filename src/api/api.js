import openAI from "./config";

export const getCompletion = async (prompt) => {
  const response = await openAI.post("/completions", {
    prompt,
    temperature: 0.9,
  });

  console.log(response.data.choices[0].text);
  return response.data.choices[0].text;
};
