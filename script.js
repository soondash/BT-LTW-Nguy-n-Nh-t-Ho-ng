// BƯỚC 1: Lấy các phần tử (element) từ HTML sang JavaScript
let form = document.getElementById("myForm");

let nameInput = document.getElementById("name");
let nameError = document.getElementById("nameError");

let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");

let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");


// BƯỚC 2: Viết các hàm kiểm tra (Validate) cho từng ô nhập liệu

// 2.1 Kiểm tra Họ tên
function checkName() {
    let value = nameInput.value.trim(); // .trim() để xóa khoảng trắng ở 2 đầu
    if (value.length >= 3) {
        // Nếu đúng: xóa chữ lỗi, xóa viền đỏ, trả về true
        nameError.textContent = "";
        nameInput.classList.remove("input-error");
        return true;
    } else {
        // Nếu sai: hiện chữ lỗi, thêm viền đỏ, trả về false
        nameError.textContent = "Họ tên tối thiểu 3 ký tự";
        nameInput.classList.add("input-error");
        return false;
    }
}

// 2.2 Kiểm tra Email
function checkEmail() {
    let value = emailInput.value;
    // Biểu thức chính quy (Regex) kiểm tra định dạng email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (emailRegex.test(value)) {
        emailError.textContent = "";
        emailInput.classList.remove("input-error");
        return true;
    } else {
        emailError.textContent = "Email không hợp lệ";
        emailInput.classList.add("input-error");
        return false;
    }
}

// 2.3 Kiểm tra Số điện thoại
function checkPhone() {
    let value = phoneInput.value;
    // Regex kiểm tra xem có đúng 10 chữ số hay không (\d là số, {10} là 10 lần)
    let phoneRegex = /^\d{10}$/;
    
    if (phoneRegex.test(value)) {
        phoneError.textContent = "";
        phoneInput.classList.remove("input-error");
        return true;
    } else {
        phoneError.textContent = "SĐT phải gồm 10 số";
        phoneInput.classList.add("input-error");
        return false;
    }
}


// BƯỚC 3: Gắn sự kiện "input" - tự động kiểm tra mỗi khi người dùng gõ phím
nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
phoneInput.addEventListener("input", checkPhone);

// Chạy thử kiểm tra Email ngay khi tải trang (vì trong HTML ô Email đã có sẵn chữ "an@ptit")
checkEmail(); 


// BƯỚC 4: Gắn sự kiện "submit" - xử lý khi bấm nút Gửi
form.addEventListener("submit", function(event) {
    // Chạy các hàm kiểm tra và lưu lại kết quả (true hoặc false)
    let isNameOk = checkName();
    let isEmailOk = checkEmail();
    let isPhoneOk = checkPhone();

    // Nếu 1 trong 3 cái bị sai (bằng false)
    if (isNameOk === false || isEmailOk === false || isPhoneOk === false) {
        // Ngăn không cho form gửi đi (ngăn hành động mặc định)
        event.preventDefault(); 
    } else {
        // Nếu tất cả đều đúng
        alert("Đăng ký thành công!");
    }
});
