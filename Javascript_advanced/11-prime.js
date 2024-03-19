function countPrimeNumbers() {
    const countDown = performance.now();

    function isPrime(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;

        if (number % 2 === 0 || number % 3 === 0) return false;

        for (let i = 5; i * i <= number; i +=6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) count++;
    }

    const endCountDown = performance.now();
    const runTime = endCountDown - countDown;

    return runTime;
}

let amountOfTimeRan = 0;
const totalTime = 100;
let count = 0;

function repeatCountPrimeNumbers() {
    if (count < totalTime) {
        amountOfTimeRan += countPrimeNumbers();
        count++;
        setTimeout(repeatCountPrimeNumbers, 0);
    } else {
        console.log(`Execution time of calculating prime numbers ${totalTime}  times was ${amountOfTimeRan.toFixed(16)}  milliseconds.`)
    }
}

repeatCountPrimeNumbers();