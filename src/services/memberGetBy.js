import axios from 'axios';

export const getMemberById = async (id) => {
    try {
        const response = await axios.get(`/members/api/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching member data:", error);
        throw error;
    }
};
