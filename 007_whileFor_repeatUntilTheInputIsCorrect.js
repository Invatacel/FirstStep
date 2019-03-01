// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
//
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let number;

do {
  number = prompt("Enter a number greater than 100:", 0);
} while (number <= 100 && number);

// The loop do..while repeats while both checks are truthy:
//
// 1. The check for num <= 100 – that is, the entered value is still not greater than 100.
// 2. The check && num is false when num is null or a empty string. Then the while loop stops too.
// P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
