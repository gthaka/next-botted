
import axios from "axios";

export const chatQa = async (input: string) => {
    try {
        const params = {
            model: "text-davinci-003",
            prompt: `Q:${input}?`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
        const res = await axios.post(`/api/convos`, { params });
        return await res.data
    } catch (error) {
        return { error: error };
    }

}

export const chatBot = async (input: string) => {
    try {
        const params = {
            model: "text-davinci-003",
            prompt: `Human:${input}`,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
        }
        const res = await axios.post(`/api/convos`, { params });
        return await res.data
    } catch (error) {
        return { error: error };
    }

}