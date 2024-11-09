import axios from 'axios';

export const memberCreate = async (member) => {
    try {
        await axios.post(`/members/api/create`, {
            name: member.name,
            employee: member.employee,
            assignment: member.assignment,
            document: member.document,
        });
    } catch (error) {
        console.error("Error creating member:", error);
        throw error;
    }
};