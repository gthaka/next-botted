
import axios from "axios";

export const chatQa = async (input: string) => {
    try {
        const res = await axios.post(`/api/convos`, { input });
        return await res.data
    } catch (error) {
        return { error: error };
    }

}