const array_ = [11,2,6,8,2,21];

const newArrayFilter_ = array_.filter((value, number, array) => {
    return value > 6;
});         // filter the value which are grater than 6 in array_

console.log(newArrayFilter_);