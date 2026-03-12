const examResults = [
    { skill: "Git/GitHub", score: 8.0 },
    { skill: "HTML/CSS", score: 9.0 },
    { skill: "JavaScript", score: 7.5 },
    { skill: "ReactJS", score: 8.5 },
    { skill: "NodeJS", score: 7.0 },
    { skill: "Docker", score: 6.5 },
    { skill: "Python", score: 8.0 },
    { skill: "Machine Learning", score: 7.5 },
];

const totalScore = examResults.reduce((sum, item) => {
    return sum + item.score;
}, 0);

const average = totalScore / examResults.length;

console.log(average.toFixed(1));
