// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

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
