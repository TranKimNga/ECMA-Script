/* 
1. forEach  => Lặp qua từng phần tử
2. filter   => Lọc phần tử
3. some     => Kiểm tra có ít nhất 1 phần tử thỏa mãn điều kiện

*/

/*
1. forEach
numbers.forEach(loopNumbersArray);

const provinces = [
    "Hà Nội",
    "Đà Lạt",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Huế",
];

provinces.forEach((province) => {
    console.log(province);
});
*/
// 2. filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    console.log(number);
});

const filteredNumbers = numbers.filter((number, index) => {
    return number % 2 === 0;
});

console.log(filteredNumbers);
