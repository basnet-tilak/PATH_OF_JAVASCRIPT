
const arrayString_= ["Tilak","Kshitish","Him","Shubham","Sujan","Devil"];
const array_ = [11,2,6,8,2,21];

const newArray_ = array_.map( (x) => x * 2);  // multiply by 2 of each value of array_
const newArray_2 = array_.flatMap((x) => x  + 2) // add by 2 of each value of array_

const newArrayReduce_ = array_.reduce((total, value, index, array_) =>{
    return total + value;
});                                         // sum of all element in array

console.log(newArray_);
console.log(newArray_2);
console.log(newArrayReduce_);
