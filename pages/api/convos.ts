import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_OPENAI_API_URL}`;
const API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  try {
    const { input } = req.body;
    // Make request to OpenAI API
    const response = await axios.post(API_URL,
      {
        model: "text-davinci-003",
        prompt: `Q:${input}?`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["\n"],
      }
      , {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
    const aiResponse = (response.data.choices[0].text).replace('A:', '');

    res.status(200).json({ input, aiResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}