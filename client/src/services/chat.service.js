import api from "./api"

export const sendMassege = async (message) => {
    const res = await api.post('ai-chat', { message });
    return res.data;
}