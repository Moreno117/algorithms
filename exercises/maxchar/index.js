// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charObj = str.split('').reduce((acc, next) => {
        if(!acc[next]){
            acc[next] = 1
        } else {            
            acc[next] ++
        }
        return acc;
    },{})
    
    let maximun = '';
    let max = 0;
    for(char in charObj){        
        if(charObj[char] > max){
            max = charObj[char]
            maximun = char            
        }
    }

    return maximun
}

console.log(maxChar("wqwuwawawawtwewrwlwlwowqwiwiwuwswawawawaw"))

module.exports = maxChar;
