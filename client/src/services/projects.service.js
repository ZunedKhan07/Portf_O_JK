import api from "./api"

export const getProject = async () => {
    const res = await api.get('/get-project');
    return res.data;
}

export const addProject = async (data) => {
    const res = await api.post('/add-project', data);
    return res.data;
}