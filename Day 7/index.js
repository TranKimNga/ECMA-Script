/* Bài 1 */
// let carts = [
//     "Snack",
//     "Sữa",
//     "Bánh quy",
//     "Táo",
//     "Quýt",
//     "Giấy",
//     "Kem",
//     "Dầu gội",
//     "Sữa rửa mặt",
//     "Kem",
// ];

// console.log(`Tổng số món hàng: ${carts.length}`);
// console.log(
//     `Món hàng đầu tiên: ${carts[0]} và sau cùng: ${carts[carts.length - 1]}`,
// );

/* Bài 2 */
let friends = ["Trang", "Tùng", "Phượng"];

friends.push("Hương");
console.log(friends);
console.log(friends.length);
console.log(friends[0]);

friends.unshift("Trâm");
console.log(friends);

friends.pop();
console.log(friends);

friends.splice(2, 0, "Hạnh");
console.log(friends);

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}