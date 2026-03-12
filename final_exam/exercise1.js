const checkBorrowRequest = (deviceName, quantity, availableStock) => {
    if (quantity <= 0) {
        console.log("Yêu cầu không hợp lệ.");
    } else if (quantity > availableStock) {
        console.log(`Yêu cầu từ chối: Không đủ thiết bị ${deviceName}.`);
    } else {
        console.log(`Đã duyệt mượn ${quantity} ${deviceName}.`);
    }
};

checkBorrowRequest("Arduino", 5, 2);
checkBorrowRequest("Sensor", -1, 10);
checkBorrowRequest("Raspberry Pi", 2, 5);
