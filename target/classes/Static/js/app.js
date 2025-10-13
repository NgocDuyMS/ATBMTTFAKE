// Hàm để ẩn/hiện các bài tập con
// filepath: c:\VSC\ATBMTT_Group\src\main\resources\Static\js\app.js
function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// Hàm để hiển thị nội dung của từng bài tập
function showContent(task) {
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    
    // Cập nhật tiêu đề
    let title = "";
    let content = "";

    // Dựa vào tham số 'task' để chèn nội dung phù hợp
    if (task === 'caesar') {
        title = "Bài 1: Mã hóa Caesar";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán Caesar</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextCaesar">Chuỗi:</label>
                <input type="text" id="inputTextCaesar">
                <label for="inputKeyCaesar">Khóa:</label>
                <input type="number" id="inputKeyCaesar">
                <button onclick="encryptCaesar()">Mã Hóa</button>
                <p>Kết quả: <span id="resultCaesar"></span></p>
            </div>
        `;
    }else if (task === 'vigenere') {
        title = "Bài 2: Mã hóa Vigenère";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán Vigenère</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextVigenere">Chuỗi:</label>
                <input type="text" id="inputTextVigenere">
                <label for="inputKeyVigenere">Khóa:</label>
                <input type="text" id="inputKeyVigenere">
                <button onclick="encryptVigenere()">Mã Hóa</button>
                <p>Kết quả: <span id="resultVigenere"></span></p>
            </div>
        `;
    }else if (task === 'modulo') {
        title = "Bài 1: Phép tính Modulo";
        content = `
            <div class="task-container">
                <h3>Phép tính a mod n</h3>
                <p>Nhập giá trị a và n để tính a mod n.</p>
                <label for="inputA">Giá trị a:</label>
                <input type="number" id="inputA">
                <label for="inputN">Giá trị n:</label>
                <input type="number" id="inputN">
                <button onclick="calculateModulo()">Tính</button>
                <p>Kết quả: <span id="resultModulo"></span></p>
            </div>
        `;
             
    }else if(task === 'mod-inverse'){
        title = "Bài 2: Phép tính Modulo Inverse";
        content = `
            <div class="task-container">
                <h3>Tính nghịch đảo modulo</h3>
                <p>Nhập giá trị a và n để tính nghịch đảo modulo.</p>
                <label for="inputAInverse">Giá trị a:</label>
                <input type="number" id="inputAInverse">
                <label for="inputNInverse">Giá trị n:</label>
                <input type="number" id="inputNInverse">
                <button onclick="calculateModuloInverse()">Tính</button>
                <p>Kết quả: <span id="resultModuloInverse"></span></p>
            </div>
        `;
    }else if(task === 'feistel'){
        title = "Bài 0 : Mã Khối Feistel";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán Feistel</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextFeistel">Chuỗi:</label>
                <input type="text" id="inputTextFeistel">
                <label for="inputKeyFeistel">Khóa:</label>
                <input type="number" id="inputKeyFeistel">
                <button onclick="encryptFeistel()">Mã Hóa</button>
                <p>Kết quả: <span id="resultFeistel"></span></p>
            </div>
        `;
    }else if(task === 'des'){
        title = "Bài 1: Mã hóa DES";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán DES</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextDES">Chuỗi:</label>
                <input type="text" id="inputTextDES">
                <label for="inputKeyDES">Khóa:</label>
                <input type="number" id="inputKeyDES">
                <button onclick="encryptDES()">Mã Hóa</button>
                <p>Kết quả: <span id="resultDES"></span></p>
            </div>
        `;
    }else if(task === 'aes'){
        title = "Bài 1: Mã hóa AES";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán AES</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextAES">Chuỗi:</label>
                <input type="text" id="inputTextAES">
                <label for="inputKeyAES">Khóa:</label>
                <input type="number" id="inputKeyAES">
                <button onclick="encryptAES()">Mã Hóa</button>
                <p>Kết quả: <span id="resultAES"></span></p>
            </div>
        `;
    }else if(task === 'rsa'){

        title = "Bài 2: Mã hóa RSA";
        content = `
            <div class="task-container">
                <h3>Mã hóa chuỗi bằng thuật toán RSA</h3>
                <p>Nhập chuỗi và khóa để mã hóa.</p>
                <label for="inputTextRSA">Chuỗi:</label>
                <input type="text" id="inputTextRSA">
                <label for="inputKeyRSA">Khóa:</label>
                <input type="number" id="inputKeyRSA">
                <button onclick="encryptRSA()">Mã Hóa</button>
                <p>Kết quả: <span id="resultRSA"></span></p>
            </div>

        `;
    }else if(task === 'DiffHell'){
        title = "Bài 2: Trao đổi khóa Diffie-Hellman";
        content = `
            <div class="task-container">
                <h3>Trao đổi khóa Diffie-Hellman</h3>
                <p>Nhập các giá trị để thực hiện trao đổi khóa.</p>
                <label for="inputP">Số nguyên tố p:</label>
                <input type="number" id="inputP">
                <label for="inputG">Cơ số g:</label>
                <input type="number" id="inputG">
                <label for="inputPrivateA">Khóa riêng tư của Alice:</label>
                <input type="number" id="inputPrivateA">
                <label for="inputPrivateB">Khóa riêng tư của Bob:</label>
                <input type="number" id="inputPrivateB">
                <button onclick="performDiffieHellman()">Thực hiện Trao đổi Khóa</button>
                <p>Khóa chung: <span id="resultDiffieHellman"></span></p>
            </div>
        `;
    }else if(task ==='aes-intro'){
        title = "Giới thiệu về AES";
        content = `
            <div class="task-container">
                <h3>Giới thiệu về AES</h3>
                <p>AES (Advanced Encryption Standard) là một tiêu chuẩn mã hóa khối được sử dụng rộng rãi trên toàn thế giới. Nó được thiết kế để bảo vệ dữ liệu nhạy cảm và được sử dụng trong nhiều ứng dụng, từ bảo mật dữ liệu cá nhân đến bảo mật thông tin doanh nghiệp.</p>
                <h4>Các đặc điểm chính của AES:</h4>
                <ul>
                    <li><strong>Kích thước khối:</strong> AES mã hóa dữ liệu thành các khối có kích thước 128 bit.</li>
                    <li><strong>Kích thước khóa:</strong> AES hỗ trợ ba kích thước khóa: 128, 192 và 256 bit.</li>
                    <li><strong>Hiệu suất cao:</strong> AES được thiết kế để hoạt động nhanh và hiệu quả trên cả phần cứng và phần mềm.</li>
                    <li><strong>Bảo mật mạnh mẽ:</strong> AES được coi là rất an toàn và chưa có phương pháp tấn công hiệu quả nào được biết đến.</li>
                </ul>
    
        `;
    }else if(task ==='aes-encryption'){
        title = "Quy trình mã hóa AES";
        content = `
            <div class="task-container">
                <h3>Quy trình mã hóa AES</h3>
                <p>Quy trình mã hóa AES bao gồm các bước chính sau:</p>
                <ol>
                    <li><strong>Chia dữ liệu thành các khối:</strong> Dữ liệu được chia thành các khối 128 bit. Nếu dữ liệu không đủ dài, nó sẽ được điền thêm để đạt kích thước này.</li>
                    <li><strong>Khởi tạo khóa:</strong> Khóa mã hóa được mở rộng thành một loạt các khóa con sử dụng thuật toán mở rộng khóa AES.</li>
                    <li><strong>Thực hiện các vòng mã hóa:</strong> Mỗi khối dữ liệu trải qua một loạt các vòng mã hóa, bao gồm các bước như thay thế byte, hoán vị, trộn cột và thêm khóa vòng.</li>
                    <li><strong>Kết hợp các khối mã hóa:</strong> Các khối mã hóa được kết hợp lại để tạo thành dữ liệu mã hóa cuối cùng.</li>
                </ol>
                <p>Mỗi bước trong quy trình này đóng vai trò quan trọng trong việc đảm bảo tính bảo mật và hiệu quả của AES.</p>
            </div>
        `;
    }else if(task ==='aes-decryption'){
        title = "Quy trình giải mã AES";
        content = `
            <div class="task-container">
                <h3>Quy trình giải mã AES</h3>
                <p>Quy trình giải mã AES bao gồm các bước chính sau:</p>
                <ol>
                    <li><strong>Chia dữ liệu mã hóa thành các khối:</strong> Dữ liệu mã hóa được chia thành các khối 128 bit.</li>
                    <li><strong>Khởi tạo khóa:</strong> Khóa mã hóa được mở rộng thành một loạt các khóa con sử dụng thuật toán mở rộng khóa AES.</li>
                    <li><strong>Thực hiện các vòng giải mã:</strong> Mỗi khối dữ liệu trải qua một loạt các vòng giải mã, bao gồm các bước như đảo ngược trộn cột, đảo ngược hoán vị, đảo ngược thay thế byte và thêm khóa vòng.</li>
                    <li><strong>Kết hợp các khối giải mã:</strong> Các khối giải mã được kết hợp lại để tạo thành dữ liệu gốc cuối cùng.</li>
                </ol>
                <p>Mỗi bước trong quy trình này đóng vai trò quan trọng trong việc đảm bảo tính bảo mật và hiệu quả của AES.</p>
            </div>
        `;
    }

    
    // Bạn sẽ thêm các điều kiện 'else if' cho các bài tập khác
        contentTitle.innerText = title;
        contentBody.innerHTML = content;

}

// Đây là hàm ví dụ để tính modulo (cần kết nối với Back-end)
function calculateModulo() {
    const a = document.getElementById('inputA').value;
    const n = document.getElementById('inputN').value;
    // Gửi yêu cầu đến Back-end và hiển thị kết quả
    const result = a % n;
    document.getElementById('resultModulo').innerText = result;
}

// Hàm ví dụ để mã hóa Caesar (cần kết nối với Back-end)
function encryptCaesar() {
    const text = document.getElementById('inputTextCaesar').value.toUpperCase(); // Chuyển chuỗi thành chữ in hoa
    const key = parseInt(document.getElementById('inputKeyCaesar').value); // Chuyển key thành số nguyên
    const resultElement = document.getElementById('resultCaesar');

    if (!text || isNaN(key)) {
        resultElement.innerText = "Vui lòng nhập đầy đủ chuỗi và khóa!";
        return;
    }

    let encryptedText = "";

    // Mã hóa Caesar
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'A' && char <= 'Z') {
            // Tính toán ký tự mới
            const newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
            encryptedText += newChar;
        } else {
            // Nếu không phải ký tự chữ cái, giữ nguyên
            encryptedText += char;
        }
    }

    // Hiển thị kết quả
    resultElement.innerText = encryptedText;
}
function encryptAES() {
    const text = document.getElementById('inputTextAES').value;
    const key = document.getElementById('inputKeyAES').value;
    // Gửi yêu cầu đến Back-end và hiển thị kết quả
    // Đây là nơi bạn sẽ dùng fetch() để gọi API
    document.getElementById('resultAES').innerText = "Đang xử lý...";
}
function encryptVigenere() {
    const text = document.getElementById('inputTextVigenere').value.toUpperCase();
    const key = document.getElementById('inputKeyVigenere').value.toUpperCase();
    const resultElement = document.getElementById('resultVigenere');

    if (!text || !key) {
        resultElement.innerText = "Vui lòng nhập đầy đủ chuỗi và khóa!";
        return;
    }

    let encryptedText = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'A' && char <= 'Z') {
            // Tính toán ký tự mới
            const charCode = ((char.charCodeAt(0) - 65) + (key[keyIndex].charCodeAt(0) - 65)) % 26;
            encryptedText += String.fromCharCode(charCode + 65);

            // Di chuyển đến ký tự tiếp theo trong khóa
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            // Nếu không phải ký tự chữ cái, giữ nguyên
            encryptedText += char;
        }
    }

    // Hiển thị kết quả
    resultElement.innerText = encryptedText;
}
