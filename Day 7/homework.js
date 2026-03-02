const countValidCases = (memoryUsages, limit) => {
    let count = 0;
    for (let i = 0; i < memoryUsages.length; i++) {
        if (memoryUsages[i] <= limit) {
            count++;
        }
    }
    return count;
};

console.log(countValidCases([32, 45, 28, 50, 64, 20], 40));
