
for (let i = 1; i <= 100; i++) {
    let fizzBuzzOrFizzbuzz;

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        fizzBuzzOrFizzbuzz = 'Fizz';
    } else if (i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'Buzz';
    } else {
        fizzBuzzOrFizzbuzz = i

    }

    console.log(fizzBuzzOrFizzbuzz);
}
