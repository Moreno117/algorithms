// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const newStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split(''); 
//     const newStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split(''); 
//     const mappedB = mapping(newStringB);
//     const mappedA = mapping(newStringA);

//     function mapping(arr){
//         return arr.reduce((acc, next) => {
//             if(!acc[next]){
//                 acc[next] = 1;
//             } else{
//                 acc[next]++
//             }
//             return acc
//         },{})    
//     }

//     if(Object.keys(mappedA).length !== Object.keys(mappedB).length){
//         return false
//     } 
    
//     for(let char in mappedA){
//         if(mappedA[char] !== mappedB[char]){
//             return false
//         }
//     }
    
//     return true;
// }

function anagrams(stringA, stringB){
    return (
        stringA.replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('') 
        === 
        stringB.replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
    )
}
console.log(anagrams('Bye there', 'Bye there'))

module.exports = anagrams;
