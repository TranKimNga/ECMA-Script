const employees = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "nva@company.com",
        phoneNumber: "0901234567",
        gender: "Male",
        position: "Developer",
        salary: 2000,
    },
    {
        id: 2,
        name: "Trần Thị B",
        email: null,
        phoneNumber: "0912345678",
        gender: "Female",
        position: "Tester",
        salary: 1200,
    },
    {
        id: 3,
        name: "Lê Văn C",
        email: "lvc@company.com",
        phoneNumber: null,
        gender: "Male",
        position: "Developer",
        salary: 1800,
    },
    {
        id: 4,
        name: "Phạm Thị D",
        email: null,
        phoneNumber: null,
        gender: "Female",
        position: "HR",
        salary: 1000,
    },
    {
        id: 5,
        name: "Hoàng Văn E",
        email: "hve@company.com",
        phoneNumber: "0934567890",
        gender: "Male",
        position: "Manager",
        salary: 3500,
    },
];

//1.
const filteredEmployees = employees.filter((employee) => {
    const { email, phoneNumber } = employee;
    return email || phoneNumber;
});
console.log(filteredEmployees);

/*2. Yêu cầu 2: Khôi phục dữ liệu (Data Imputation/Transformation)
       - Từ danh sách hợp lệ ở Yêu cầu 1, đối với những nhân viên bị thiếu email (tức là email đang bằng null), hãy tự động tạo một email mặc định cho họ.
       - Công thức tạo email: Lấy [id] kết hợp với [position viết thường] + @company.com.
       - Ví dụ: Nhân viên có id là 2, position là Tester bị thiếu email -> Email mới sẽ là: 2_tester@company.com. Cập nhật email này vào record của nhân viên đó.
*/

const updatedEmployees = filteredEmployees.map((employee) => ({
    ...employee,
    email:
        employee.email ||
        `${employee.id}_${employee.position.toLowerCase()}@company.com`,
}));

console.log(updatedEmployees);
