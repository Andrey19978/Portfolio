function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Выводим результат sumTo(5) в элемент с id 'output'
document.getElementById('output').innerHTML = sumTo(5);