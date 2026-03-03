const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    console.log(number);
});

const filteredNumbers = numbers.filter((number, index) => number % 2 === 0);

console.log(filteredNumbers);
