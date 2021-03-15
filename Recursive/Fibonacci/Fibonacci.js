/* 
* Fibonacci Sequence using Recursion
*
* Fibonacci sequence, 'the golden ratio' or ' The Fibonacci Spiral' 
* is a sequence of numbers where each number is the sum of the two preceding ones,
* starting from 0 and 1. (via wikipedia)
* There are various methods to get nth Fibonacci numbers. This example uses Recursion.
* 
* Implementation: Given a number n, print n-th Fibonacci Number.
*
*/

const fibonacci = (N) => {
    if (N === 0 || N ===1 ) return N

    return fibonacci(N - 2) + fibonacci(N - 1)
    
}

// Testing the Implementation
(() => {
    const number = 12
    console.log(number + 'th Fibonacci number is ' + fibonacci(number) + '\n')

    for (let i = 1; i <= 10; i++){
        console.log (i + 'th Fibonacci number is ' + fibonacci(i))
    }
})()

