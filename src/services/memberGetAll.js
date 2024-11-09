import axios from 'axios';

export const getMembersAll = async () => {
    const response = await axios.get('/members/api/all')
    return response.data
}