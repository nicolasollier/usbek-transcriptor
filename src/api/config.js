import axios from 'axios';

const openAI = axios.create({
  baseURL: import.meta.env.VITE_OPENAI_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default openAI;
