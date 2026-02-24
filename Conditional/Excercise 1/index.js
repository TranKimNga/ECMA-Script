/*Cho 1 biến month, year có kiểu dữ liệu Number
Kiểm tra xem:
Nếu month = 1, 3, 5, 7, 8, 10, 12 thì in ra “Tháng … có 31 ngày”
Nếu month = 4, 6, 9, 11 thì in ra “Tháng … có 30 ngày”
Nếu month = 2 thì thực hiện tính toán:
Nếu year chia hết cho 4 VÀ year không chia hết cho 100 thì in ra “Tháng 2 có 29 ngày”
Còn không in ra “Tháng 2 có 28 ngày”
Còn lại in ra tháng không hợp lệ*/

let month = 2;
let year = 2024;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);
        break;
    case 2:
        if (year % 4 == 0 && year % 100 != 0) {
            console.log("Tháng 2 có 29 ngày");
        } else {
            console.log("Tháng 2 có 28 ngày");
        }
        break;
    default:
        console.log("Tháng không hợp lê");
        break;
}
