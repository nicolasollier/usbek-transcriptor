import axios from 'axios';

const openAI = axios.create({
  baseURL: import.meta.env.VITE_OPENAI_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
    'Content-Type': 'multipart/form-data',
  },
});

export default openAI;
