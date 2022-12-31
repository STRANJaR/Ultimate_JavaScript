let  b = document.body
console.log("FIrst child of b is : " , b.firstChild);
console.log("FIrst Element child of b is : " , b.firstElementChild);

const changeBodyRed = () =>{
    document.body.firstElementChild.style.background  = "red";
}