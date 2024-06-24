// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!



// first we are going to want to turn the number into a string
// then we will want an array to save the new values of the string in
// next we will want to make a for loop to iterate thru the string
// we will then want to save the square of the number to the array
// lastly we will turn the array into a string and then into a number to return
function squareDigits(num){
    let str = num.toString();
    let results = [];
    for (let i = 0; i < str.length; i++){
        results[i] = str[i] * str[i];
    }
    return Number(results.join(''));
}

// another way to do it

// num.toString(): Converts the input number to a string.
// .split(''): Splits the string into an array of individual digits.
// .map(i => i*i): Maps each digit to its square.
// .join(''): Joins the squared digits back into a single string.
// +: Unary plus operator converts the final string back to a number.
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}