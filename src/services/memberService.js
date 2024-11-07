import axios from 'axios';

export const getMembers = async () => {
    const response = await axios.get('/members/api/all')
    return response.data
}

