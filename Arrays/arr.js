 let marks_class_12 = [89, 43, 66, 90, 78, "Hello world"];

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);

marks_class_12[7] = 50;
marks_class_12[0] = 99;
console.log(marks_class_12.length);

// Print value using for loop 

for(i=0; i<=marks_class_12.length; i++){
    console.log(marks_class_12[i]);

}