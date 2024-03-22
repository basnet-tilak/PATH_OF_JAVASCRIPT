
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