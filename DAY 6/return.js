function calculatePytago(canhGocVuong1, canhGocVuong2) {
    let canhHuyen = Math.sqrt(
        Math.pow(canhGocVuong1, 2) + Math.pow(canhGocVuong2, 2),
    );
    return canhHuyen;
}

console.log(calculatePytago(10, 20));
