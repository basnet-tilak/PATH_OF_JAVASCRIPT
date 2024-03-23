
const arrayString_= ["Tilak","Kshitish","Him","Shubham","Sujan","Devil"];
const array_ = [11,2,6,8,2,21];
const fullName = "Tilak Basnet";

console.log(array_[0]);

/*
for(let i = 0; i<array_.length; i++){
    console.log(array_[i]);
}
*/

array_.forEach(element => {
    console.log(element)
});

const arrayStringOfChar = [];
/**
 * This will convert the String to Array to each character.
 */

for(let i = 0;  i<fullName.length; i++){
    arrayStringOfChar.push(fullName[i]);
}

console.log('Reverse of '+ `'${fullName}' ` + 'is ' + arrayStringOfChar.toReversed(arrayStringOfChar).join().replaceAll(',',''))


for(let i  in array_){
    console.log(i)
}