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