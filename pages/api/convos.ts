import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_OPENAI_API_URL}`;
const API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req: { body: { params: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { input?: any; aiResponse?: any; error?: any; }): void; new(): any; }; }; }) {
  try {
    const { params } = req.body;
    // Make request to OpenAI API
    const response = await axios.post(API_URL, params, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const aiResponse = (response.data.choices[0].text).replace('A:', '');

    res.status(200).json({ aiResponse });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}