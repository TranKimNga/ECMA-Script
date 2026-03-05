/* map  => Ánh xạ toàn bộ phần tử */

const mathScores = [8, 7, 9, 10, 5.5, 3, 5.5, 8, 9.5, 2];

const newMathScores = mathScores.map((score) =>
    score < 10 ? score + 1 : score,
);

console.log(newMathScores);
