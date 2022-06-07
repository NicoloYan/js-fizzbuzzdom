
const listElement = document.getElementById('list');

for (let i = 1; i <= 100; i++) {
    let fizzBuzzOrFizzbuzz;

    let li = document.createElement('li');

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'FizzBuzz';
        li.innerHTML = fizzBuzzOrFizzbuzz
    } else if (i % 3 === 0) {
        fizzBuzzOrFizzbuzz = 'Fizz';
        li.innerHTML = fizzBuzzOrFizzbuzz
    } else if (i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'Buzz';
        li.innerHTML = fizzBuzzOrFizzbuzz
    } else {
        fizzBuzzOrFizzbuzz = i
        li.innerHTML = fizzBuzzOrFizzbuzz

    }

    listElement.append(li)
}


