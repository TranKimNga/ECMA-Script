const scores = [8, 10, 7, 4, 9, 5.5, 6, 7.5, 3, 2];

const hasFailStudent = scores.some((score) => score < 5);

console.log(`Có bạn nào dưới trung bình không? ${hasFailStudent}`);

const allPassed = scores.every((score) => score >= 5);

console.log(`Toàn bộ lớp có qua môn hay không? ${allPassed}`);
