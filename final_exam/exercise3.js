const projects = [
    { id: 1, name: "smart home", status: "completed" },
    { id: 2, name: "auto watering", status: "in-progress" },
    { id: 3, name: "weather station", status: "planned" },
    { id: 4, name: "leetcode clone platform", status: "in-progress" },
    { id: 5, name: "excode landing page", status: "completed" },
    { id: 6, name: "custom mechanical keyboard", status: "planned" },
    { id: 7, name: "ai face recognition", status: "in-progress" },
    { id: 8, name: "smart traffic light", status: "completed" },
];

//Transform project names to uppercase
const upperCaseProjects = projects.map((project) => {
    const { id, name, status } = project;

    return {
        id,
        name: name.toUpperCase(),
        status,
    };
});

console.log(upperCaseProjects);

// Get all projects with status "in-progress"
const inProgressProjects = projects.filter(
    (project) => project.status === "in-progress",
);

console.log("In-progress:", inProgressProjects);
