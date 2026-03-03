const scores = [8, 10, 7, 4, 9, 5.5, 6, 7.5, 3, 2];

const hasFailStudent = scores.some((score) => score < 5);

console.log(
    hasFailStudent
        ? "Có sinh viên dưới trung bình"
        : "Không có sinh viên nào dưới trung bình",
);

const isAllPassed = scores.every((score) => score >= 5);

console.log(
    isAllPassed ? "Toàn bộ lớp qua môn" : "Vẫn còn sinh viên chưa qua môn",
);
