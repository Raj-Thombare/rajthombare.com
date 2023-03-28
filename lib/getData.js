export const getSkills = async () => {
    const data = (await import('./skills.json')).default;
    return data.skills;
};