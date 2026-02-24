let numOfOrder = 5;
let total = 0;

for (let i = 1; i <= numOfOrder; i++) {
    let price = Math.ceil(Math.random() * 5000000);

    if (price < 1000000) {
        price = 1000000;
    }
    total += price;
}

console.log(`Tong phai tra: ${total}`);
