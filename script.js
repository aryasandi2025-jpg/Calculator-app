const display = document.getElementById('display');

// Fungsi untuk memasukkan angka / operator ke layar
function appendValue(val) {
    display.value += val;
}

// Fungsi untuk menghapus seluruh layar (Tombol C)
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghapus 1 karakter terakhir (Tombol ⌫)
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil akhir (Tombol =)
function calculate() {
    try {
        // Mengubah huruf 'x' menjadi '*' agar bisa dihitung oleh JavaScript
        let ekspresi = display.value.replace(/x/g, '*');
        
        display.value = eval(ekspresi);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Fitur Tambahan: Kontrol dari Keyboard Laptop
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '/') {
        appendValue(key);
    } else if (key === 'x' || key === 'x' || key === '*') {
        appendValue('x');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
