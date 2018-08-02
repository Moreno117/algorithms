// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

function reverse(str) {    
    let newStr = '';
    for(let char of str.split('')){
        newStr = char + newStr
    }
    return newStr
}

console.log(reverse('perro'))

module.exports = reverse;
