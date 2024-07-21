export const getSkills = async () => {
    const data = (await import('./skills.json')).default;
    return data.skills;
};

export const getProjects = async () => {
    const data = (await import('./projects.json')).default;
    return data.projects;
};

export const getEducation = async () => {
    const data = (await import('./education.json')).default;
    return data.education;
};

export const getBlogs = async () => {
    const data = (await import('./blogs.json')).default;
    return data.blogs;
};