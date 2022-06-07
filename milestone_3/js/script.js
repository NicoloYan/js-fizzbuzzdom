// Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).
// Per questa Milestone avete lo screenshot allegato al messaggio.

const box = document.getElementById('ms_container');

for (let i = 1; i <= 100; i++) {
    let fizzBuzzOrFizzbuzz;

    let div = document.createElement('div');

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'FizzBuzz';
        div.innerHTML = fizzBuzzOrFizzbuzz
        div.classList.add('fizzbuzz')
        div.classList.add('square')
    } else if (i % 3 === 0) {
        fizzBuzzOrFizzbuzz = 'Fizz';
        div.innerHTML = fizzBuzzOrFizzbuzz
        div.classList.add('fizz')
        div.classList.add('square')
    } else if (i % 5 === 0) {
        fizzBuzzOrFizzbuzz = 'Buzz';
        div.innerHTML = fizzBuzzOrFizzbuzz
        div.classList.add('buzz')
        div.classList.add('square')
    } else {
        fizzBuzzOrFizzbuzz = i
        div.classList.add('square')
        div.innerHTML = fizzBuzzOrFizzbuzz

    }

    box.append(div)
}
