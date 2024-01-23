import openAI from "./config";

export const getTranscription = async (audio_file) => {
  try {
    const response = await openAI.post("/audio/transcriptions", {
      file: audio_file,
      model: "whisper-1",
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error in getTranscription:", error);
    throw error;
  }
};
