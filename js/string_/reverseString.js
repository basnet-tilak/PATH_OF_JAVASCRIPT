

function reverseString(str){
    const rev = [];
    for(let i = 0; i<str.length; i++){
        rev.push(str[i]);
    }
    return rev.reverse().join().replaceAll(',', '').trim();
}
console.log(reverseString('Tilak Basnet'));