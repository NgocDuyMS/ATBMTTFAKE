// Toggle chapter display
document.querySelectorAll('.chapter-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const chapterId = this.getAttribute('data-chapter');
        document.querySelectorAll('.chapter-section').forEach(section => {
            section.classList.remove('active');
            if (section.id === chapterId) section.classList.add('active');
        });
    });
});

// Default show Chapter 1
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('chapter1').classList.add('active');
});






// Chương 1: Mã Hóa Cổ Điển
function caesarEncrypt() {
    let m = document.getElementById('caesarM').value.toUpperCase().replace(/[^A-Z]/g, '');
    let k = parseInt(document.getElementById('caesarK').value) % 26;
    let c = '';
    for (let char of m) {
        c += String.fromCharCode((char.charCodeAt(0) - 65 + k) % 26 + 65);
    }
    document.getElementById('caesarC').textContent = c;
}

function vigenereLapEncrypt() {
    let m = document.getElementById('vigenereLapM').value.toUpperCase().replace(/[^A-Z]/g, '');
    let k = document.getElementById('vigenereLapK').value.toUpperCase().replace(/[^A-Z]/g, '');
    let fullKey = '';
    for (let i = 0; i < m.length; i++) {
        fullKey += k[i % k.length];
    }
    let c = '';
    for (let i = 0; i < m.length; i++) {
        c += String.fromCharCode(((m.charCodeAt(i) - 65 + fullKey.charCodeAt(i) - 65) % 26) + 65);
    }
    document.getElementById('vigenereLapC').textContent = c;
}

function vigenereAutoEncrypt() {
    let m = document.getElementById('vigenereAutoM').value.toUpperCase().replace(/[^A-Z]/g, '');
    let k = document.getElementById('vigenereAutoK').value.toUpperCase().replace(/[^A-Z]/g, '');
    let fullKey = k;
    for (let i = 0; fullKey.length < m.length; i++) {
        fullKey += m[i];
    }
    let c = '';
    for (let i = 0; i < m.length; i++) {
        c += String.fromCharCode(((m.charCodeAt(i) - 65 + fullKey.charCodeAt(i) - 65) % 26) + 65);
    }
    document.getElementById('vigenereAutoC').textContent = c;
}

function monoEncrypt() {
    let m = document.getElementById('monoM').value.toUpperCase().replace(/[^A-Z]/g, '');
    let k = document.getElementById('monoK').value.toUpperCase().replace(/[^A-Z]/g, '');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let c = '';
    for (let char of m) {
        let index = alphabet.indexOf(char);
        c += (index !== -1) ? k[index] : char;
    }
    document.getElementById('monoC').textContent = c;
}

function playfairEncrypt() {
    // Implement Playfair (phức tạp, placeholder)
    document.getElementById('playfairC').textContent = 'NA (Implement chi tiết)';
}

function permEncrypt() {
    // Placeholder cho Hoán vị
    document.getElementById('permC').textContent = 'NA (Bổ sung code)';
}

// Chương 2: Mã Hóa Mô-đun
function ch2bt1Calc() {
    let a = parseInt(document.getElementById('ch2bt1a').value);
    let m = parseInt(document.getElementById('ch2bt1m').value);
    let n = parseInt(document.getElementById('ch2bt1n').value);
    let b = Math.pow(a, m) % n;
    document.getElementById('ch2bt1b').textContent = b;
}

function ch2bt2Calc() {
    let a = parseInt(document.getElementById('ch2bt2a').value);
    let n = parseInt(document.getElementById('ch2bt2n').value);
    let x = a % n;
    document.getElementById('ch2bt2x').textContent = x;
}

function ch2bt3Calc() {
    let a = parseInt(document.getElementById('ch2bt3a').value);
    let m = parseInt(document.getElementById('ch2bt3m').value);
    let n = parseInt(document.getElementById('ch2bt3n').value);
    let b = (a * m) % n;
    document.getElementById('ch2bt3b').textContent = b;
}

function ch2bt4Calc() {
    let n = parseInt(document.getElementById('ch2bt4n').value);
    let phi = n;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) n /= i;
            phi = phi * (i - 1) / i;
        }
    }
    if (n > 1) phi = phi * (n - 1) / n;
    document.getElementById('ch2bt4phi').textContent = Math.floor(phi);
}

function ch2bt5Calc() {
    let a = parseInt(document.getElementById('ch2bt5a').value);
    let m = parseInt(document.getElementById('ch2bt5m').value);
    let n = parseInt(document.getElementById('ch2bt5n').value);
    let b = Math.pow(a, m) % n;
    document.getElementById('ch2bt5b').textContent = b;
}

function ch2bt6Calc() {
    let m1 = parseInt(document.getElementById('ch2bt6m1').value);
    let m2 = parseInt(document.getElementById('ch2bt6m2').value);
    let m3 = parseInt(document.getElementById('ch2bt6m3').value);
    let a1 = parseInt(document.getElementById('ch2bt6a1').value);
    let a2 = parseInt(document.getElementById('ch2bt6a2').value);
    let a3 = parseInt(document.getElementById('ch2bt6a3').value);
    let M = m1 * m2 * m3;
    let M1 = M / m1, M2 = M / m2, M3 = M / m3;
    let y1 = 1, y2 = 1, y3 = 1;
    while (M1 * y1 % m1 != 1) y1++;
    while (M2 * y2 % m2 != 1) y2++;
    while (M3 * y3 % m3 != 1) y3++;
    let x = (a1 * M1 * y1 + a2 * M2 * y2 + a3 * M3 * y3) % M;
    document.getElementById('ch2bt6x').textContent = x;
}

function ch2bt7Calc() {
    let a = parseInt(document.getElementById('ch2bt7a').value);
    let n = parseInt(document.getElementById('ch2bt7n').value);
    let k = a % n;
    document.getElementById('ch2bt7k').textContent = k;
}

function ch2bt8Calc() {
    let a = parseInt(document.getElementById('ch2bt8a').value);
    let b = parseInt(document.getElementById('ch2bt8b').value);
    let n = parseInt(document.getElementById('ch2bt8n').value);
    let k = 0;
    let power = 1;
    while (power < b) {
        power *= a;
        k++;
    }
    document.getElementById('ch2bt8k').textContent = k % n;
}

function ch2bt9Calc() {
    let a = parseInt(document.getElementById('ch2bt9a').value);
    let b = parseInt(document.getElementById('ch2bt9b').value);
    let x = parseInt(document.getElementById('ch2bt9x').value);
    let y = parseInt(document.getElementById('ch2bt9y').value);
    let n = parseInt(document.getElementById('ch2bt9n').value);
    let A1 = (a + b) % n;
    let A2 = (a - b) % n;
    let A3 = (a * b) % n;
    let A4 = Math.pow(a, b) % n;
    let A5 = Math.pow(x, y) % n;
    document.getElementById('ch2bt9a1').textContent = A1;
    document.getElementById('ch2bt9a2').textContent = A2;
    document.getElementById('ch2bt9a3').textContent = A3;
    document.getElementById('ch2bt9a4').textContent = A4;
    document.getElementById('ch2bt9a5').textContent = A5;
}

// Chương 3: DES
function des1Calc() {
    // Placeholder for Sinh Khóa K tir
    document.getElementById('des1Kt').textContent = 'NA (Implement chi tiết)';
}

// Thêm các hàm cho các bài tập DES khác tương tự, placeholder vì phức tạp
// Ví dụ:
function des2Calc() {
    // Placeholder for Tính C, D từ PC1
    document.getElementById('des2C').textContent = 'NA';
    document.getElementById('des2D').textContent = 'NA';
}

// Tương tự cho des3Calc đến des10Calc



















// AES - Bài 1: Tạo Khóa AES (Key Expansion)
function aes1Calc() {
    let key = document.getElementById('aes1Key').value;
    if (key.length !== 32 || !/^[0-9a-fA-F]+$/.test(key)) {
        document.getElementById('aes1RoundKey1').textContent = "Key phải là 128-bit hex (32 ký tự)";
        return;
    }
    // Placeholder: Giả lập tạo round key đầu tiên
    let roundKey1 = key.slice(0, 32); // Thực tế cần Key Expansion với Rcon và S-box
    document.getElementById('aes1RoundKey1').textContent = roundKey1;
}

// AES - Bài 2: Hoán Vị Ban Đầu (AddRoundKey)
function aes2Calc() {
    let state = document.getElementById('aes2State').value;
    let key = document.getElementById('aes2Key').value;
    if (state.length !== 32 || key.length !== 32 || !/^[0-9a-fA-F]+$/.test(state + key)) {
        document.getElementById('aes2StateOut').textContent = "State và Key phải là 128-bit hex (32 ký tự)";
        return;
    }
    // Placeholder: XOR đơn giản (thực tế cần chia thành 4x4 ma trận và XOR)
    let stateOut = '';
    for (let i = 0; i < 32; i++) {
        let s = parseInt(state[i], 16) ^ parseInt(key[i], 16);
        stateOut += s.toString(16).padStart(1, '0');
    }
    document.getElementById('aes2StateOut').textContent = stateOut;
}

// AES - Bài 3: SubBytes
function aes3Calc() {
    let state = document.getElementById('aes3State').value;
    if (state.length !== 24 || !/^[0-9a-fA-F]+$/.test(state)) {
        document.getElementById('aes3StateOut').textContent = "State phải là hex hợp lệ (24 ký tự)";
        return;
    }
    // Placeholder: Giả lập SubBytes (thực tế cần bảng S-box AES)
    let stateOut = state.split('').map(x => parseInt(x, 16) + 1).join(''); // Tăng giá trị đơn giản
    document.getElementById('aes3StateOut').textContent = stateOut;
}

// AES - Bài 4: ShiftRows
function aes4Calc() {
    let state = document.getElementById('aes4State').value;
    if (state.length !== 15 || !/^[0-9a-fA-F]+$/.test(state)) {
        document.getElementById('aes4StateOut').textContent = "State phải là hex hợp lệ (15 ký tự)";
        return;
    }
    // Placeholder: Dịch trái đơn giản (thực tế cần dịch từng hàng)
    let stateArray = state.match(/.{1,3}/g);
    let shifted = stateArray.slice(1).concat(stateArray[0]);
    document.getElementById('aes4StateOut').textContent = shifted.join('');
}

// AES - Bài 5: MixColumns
function aes5Calc() {
    let state = document.getElementById('aes5State').value;
    if (state.length !== 15 || !/^[0-9a-fA-F]+$/.test(state)) {
        document.getElementById('aes5StateOut').textContent = "State phải là hex hợp lệ (15 ký tự)";
        return;
    }
    // Placeholder: Giả lập MixColumns (thực tế cần nhân ma trận)
    let stateOut = state.split('').map(x => parseInt(x, 16) * 2 % 16).join('');
    document.getElementById('aes5StateOut').textContent = stateOut;
}

// AES - Bài 6: Toàn Bộ Một Vòng AES
function aes6Calc() {
    let state = document.getElementById('aes6State').value;
    let key = document.getElementById('aes6Key').value;
    if (state.length !== 32 || key.length !== 32 || !/^[0-9a-fA-F]+$/.test(state + key)) {
        document.getElementById('aes6StateOut').textContent = "State và Key phải là 128-bit hex (32 ký tự)";
        return;
    }
    // Placeholder: Kết hợp các bước trên
    let stateOut = state; // Thực tế cần SubBytes, ShiftRows, MixColumns, AddRoundKey
    document.getElementById('aes6StateOut').textContent = stateOut + " (Cần triển khai chi tiết)";
}
























// RSA - Bài 1: Tạo Khóa RSA (Chọn p, q)
function rsa1Calc() {
    let p = parseInt(document.getElementById('rsa1p').value);
    let q = parseInt(document.getElementById('rsa1q').value);
    let n = p * q;
    let phi = (p - 1) * (q - 1);
    document.getElementById('rsa1n').textContent = n;
    document.getElementById('rsa1phi').textContent = phi;
}

// RSA - Bài 2: Chọn Khóa Công khai (e)
function rsa2Calc() {
    let phi = parseInt(document.getElementById('rsa2phi').value);
    let e = parseInt(document.getElementById('rsa2e').value);
    let result = (e < phi && gcd(e, phi) === 1) ? "e hợp lệ" : "e không hợp lệ (phải nguyên tố cùng nhau với φ(n))";
    document.getElementById('rsa2result').textContent = result;
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

// RSA - Bài 3: Tính Khóa Bí mật (d)
function rsa3Calc() {
    let e = parseInt(document.getElementById('rsa3e').value);
    let phi = parseInt(document.getElementById('rsa3phi').value);
    let d = modInverse(e, phi);
    document.getElementById('rsa3d').textContent = d !== null ? d : "Không tìm được d (e và φ(n) không nguyên tố cùng nhau)";
}

function modInverse(a, m) {
    let m0 = m, x0 = 0, x1 = 1;
    if (m === 1) return 0;
    while (a > 1) {
        let q = Math.floor(a / m);
        let t = m;
        m = a % m;
        a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }
    if (x1 < 0) x1 += m0;
    return x1;
}

// RSA - Bài 4: Mã hóa RSA
function rsa4Calc() {
    let m = parseInt(document.getElementById('rsa4m').value);
    let e = parseInt(document.getElementById('rsa4e').value);
    let n = parseInt(document.getElementById('rsa4n').value);
    let c = modPow(m, e, n);
    document.getElementById('rsa4c').textContent = c;
}

function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp & 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp >>= 1;
    }
    return result;
}

// RSA - Bài 5: Giải mã RSA
function rsa5Calc() {
    let c = parseInt(document.getElementById('rsa5c').value);
    let d = parseInt(document.getElementById('rsa5d').value);
    let n = parseInt(document.getElementById('rsa5n').value);
    let m = modPow(c, d, n);
    document.getElementById('rsa5m').textContent = m;
}


























// modal thanh vien
// Mở modal Danh sách sinh viên
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('memberModal').classList.add('active');
});

// Đóng modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('memberModal').classList.remove('active');
});

// Đóng modal khi ấn ngoài nội dung
document.getElementById('memberModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});