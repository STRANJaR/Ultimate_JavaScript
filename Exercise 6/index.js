submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let titlecont = title.value
    let desccont = desc.value
    localStorage.setItem ("todo",JSON.stringify([titlecont , desccont]));
    console.log(e);
    todo.innerHTML = `
         <h1>${titlecont}</h1>
         <p> ${desccont}</p>
    `
})

deleteBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let titlecont = title.value
    let desccont = desc.value
    localStorage.removeItem("todo");
    todo.innerHTML = "";
})

