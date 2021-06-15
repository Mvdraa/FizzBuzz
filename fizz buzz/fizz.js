const clickThis = document.querySelector(".printNumbers");
const output = document.querySelector('#output');



function fizzBuzz() {
  for(let i = 1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.innerHTML += 'FizzBuzz' + '<br>';
    } else if (i % 3 === 0) {
      output.innerHTML += 'Fizz' + '<br>';
    } else if (i % 5 === 0) {
      output.innerHTML += 'Buzz' + '<br>';
    } else {
      output.innerHTML += i + '<br>';
    }
    
  }
  
}

clickThis.addEventListener('click', fizzBuzz);