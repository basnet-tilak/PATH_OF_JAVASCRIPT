
let text = "This is simple text with double quotAs";
let text_bactricks = `This text with backticks`;

var fullName = "Tilak Basnet";

console.log(text);
console.log(text_bactricks);
console.log(text.length); // length of the whole text

console.log(text.toLocaleUpperCase());

console.log('Character in fullName at 4 is: '+ fullName.charAt(4)); // k 
console.log('Character in fullName at 4 is: '+fullName.at(4)) // k
console.log('Character in fullName at 4 is: '+fullName[4]); // k
console.log('Index of the k in fullName at: '+fullName.indexOf('k'));  // index of the k is 4
console.log('FullName slice into first name: '+ fullName.slice(0,5)); // Tilak
console.log('Character at position end of the fullName is: '+ fullName.at(-1));   // at position end  t
console.log('Character at position second last of fullName is: '+fullName.at(-2));   // at position second last e

console.log(fullName.trim()) // remove the space begining and end of the string
