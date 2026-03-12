const candidates = [
    { name: "An", skills: ["C++", "Python"], role: "AI" },
    { name: "Bình", skills: ["HTML", "CSS", "JavaScript"], role: "Frontend" },
    { name: "Châu", skills: ["NodeJS", "MongoDB"], role: "Backend" },
    { name: "Dương", skills: ["Python", "TensorFlow"], role: "AI" },
    { name: "Trung", skills: ["HTML", "CSS", "ReactJS"], role: "Frontend" },
    { name: "Thảo", skills: ["NodeJS", "Express", "Docker"], role: "Backend" },
    { name: "Hải", skills: ["Figma", "UI/UX"], role: "Design" },
    {
        name: "Linh",
        skills: ["Python", "Pandas", "Scikit-Learn"],
        role: "Data Science",
    },
];

function buildWebTeam(data) {
    const webTeam = data.filter(
        (candidate) =>
            candidate.role === "Frontend" || candidate.role === "Backend",
    );

    const greeting = webTeam.map((candidate) => {
        return `Chào ${candidate.name}, mời bạn vào team Web!`;
    });

    return greeting;
}

console.log(buildWebTeam(candidates));
