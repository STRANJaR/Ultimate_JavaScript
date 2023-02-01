let key = prompt("Enter key do you want to set: ");
let value = prompt("Enter value do you want to set: ");

localStorage.setItem(key,value);

console.log(` The value at ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'green'){
    localStorage.removeItem(key);
}