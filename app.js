function input(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    let screen = document.getElementById('screen').value;
    document.getElementById('screen').value = screen.slice(0, -1);
}

function calculate() {
    let result = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = result;
}
