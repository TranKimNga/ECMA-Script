const calculator = (number1, number2, operator) => {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 === 0) return "Không thể chia cho 0";
            return number1 / number2;
        default:
            return "Phép toán không hợp lệ";
    }
};

console.log(calculator(8, 6, "+"));
console.log(calculator(8, 6, "-"));
console.log(calculator(8, 6, "*"));
console.log(calculator(8, 6, "/"));
