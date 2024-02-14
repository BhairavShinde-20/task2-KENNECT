// script.js
function getPrimesInRange(start, end) {
    let primes = [];

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function findPrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);

    const primes = getPrimesInRange(start, end);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Prime numbers between ${start} and ${end}: ${primes.join(', ')}</p>`;
}
