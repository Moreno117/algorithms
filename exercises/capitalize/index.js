// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// *********** Solution 1 **************
// function capitalize(str) {
//     const words = [];
    
//     str.split(' ').forEach(word => {                
//         words.push([word[0].toUpperCase() + word.slice(1)]);        
//     });

//     return words.join(' ');
// }

// *********** Solution 1 **************
function capitalize(str){
    let result = '';
    for(let i = 0; i < str.length; i++){        
        if(str[i - 1] === " " || str[i - 1] === undefined){            
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(capitalize('look it is working!'))

module.exports = capitalize;
