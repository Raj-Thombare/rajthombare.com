export const getSkills = async () => {
    const data = (await import('./skills.json')).default;
    return data.skills;
};

export const getProjects = async () => {
    const data = (await import('./projects.json')).default;
    return data.projects;
};