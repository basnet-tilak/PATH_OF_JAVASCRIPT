
const array_string = ["Tilak","Kshitish","Him","Shubham","Sujan","Devil"];
const array_number = [7,13,9,8,3,2];

console.log(array_string.sort());   //sort by alphabetical order
console.log(array_string.reverse());    //sort by descending order of alphabet
console.log(array_string.toSorted());   //sort by alphabetical order

console.log(array_number.sort((a,b) => a - b));  //sort by ascesdening order

console.log(array_number.sort((a,b) => b - a));  //sort by descending order

console.log(Math.min.apply(null, array_number));  //find the min number from the array

console.log(Math.max.apply(null, array_number)); //find the max number from the array

const newReversed_ = array_number.toReversed();  // return the reverse value of the array
const newReversedString = array_string.toReversed() // reverse the value of the array of type String also
console.log(newReversed_);
console.log(newReversedString);
