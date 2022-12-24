// Map 
let arr = [45, 55, 34, 78];
let a = arr.map((value, index, array)=>{
    console.log(value,index, array);
    return value * index;
})
console.log(a);

// Filter 
let arr2 = [56, 3, 34, 1, 5, 78];
let b = arr2.filter((value)=>{
    return value<10;
})
console.log(b);

// Reduce 
let arr3 = [1, 4, 5, 6];
let newArr = arr3.reduce((value1, value2)=>{
    return value1 + value2;

})
console.log(newArr);



