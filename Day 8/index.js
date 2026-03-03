/* 
1. forEach => Lặp qua từng phần tử
*/
/*
const numbers = [1, 2, 3, 9, 6, 3];
const loopNumbersArray = (number, index) => {
    console.log(`${number} - ${index}`);
};

//1. forEach
numbers.forEach(loopNumbersArray);
*/

let provinces = [
    "Hà Nội",
    "Đà Lạt",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Huế",
];

provinces.forEach((province, index) => {
    console.log(province);
});
