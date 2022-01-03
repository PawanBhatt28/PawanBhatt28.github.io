var array = [2,3,5,7,11,13,17];


// for(let i=0; i < array.length;i++){
//     console.log(array[i])
// }

// console.log(array.forEach(func));

function func(value){
    value = value + 10;
    // console.log(value);
}
// console.log(array);

array.push("damn its a string");
array[array.length] = "damn another sttring" ;
// console.log(array);
array = array.toString();
console.log(array);
console.log(typeof(array));

for(let i=0; i < array.length; i++){
    console.log(array[i]);
}
console.log(array.length)

const array2 = [1,23,123,4345,56,2312,];
console.log(array2.sort());