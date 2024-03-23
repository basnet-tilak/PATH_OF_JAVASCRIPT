/**
 * 
 * In JavaScript variable are used to store the value 
 * There are four way to declaration the variables 
 * 1 -> using the 'Automatically' 
 * 2 -> usgin the var
 * 3 -> using the const
 * 4 -> usgin the let 
 *  Note:-   var, const and let are the keywords
 *  variable must be declare befor use.
 */

x = 30; // This is automatically declared the variable 
var num = 40; // This is number variable 
var fullName = "Tilak Basnet"; // this is string variable

console.log("This is automatically variable: "+x); 
console.log("This is number: "+num);
console.log("This is string: "+fullName);

const arrayStringOfChar = [];
for(let i = 0;  i<fullName.length; i++){
    arrayStringOfChar.push(fullName[i]);
}

console.log('Reverse of '+ `'${fullName}' ` + 'is ' + arrayStringOfChar.toReversed(arrayStringOfChar).join().replaceAll(',',''))


