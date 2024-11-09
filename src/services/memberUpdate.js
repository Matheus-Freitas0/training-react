import axios from 'axios';

export const updateMember = async (member) => {
    try {
        await axios.put(`/members/api/`, {
            id: member.id,
            employee: member.employee,
            assignment: member.assignment,
        });
    } catch (error) {
        console.error("Error updating member:", error);
        throw error;
    }
};