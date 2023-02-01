const createTodo = async()=>{

let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    }, 
    body: JSON.stringify({
        title: 'ROHIT',
        body: 'SHRIVASTAV',
        userId: 55,
    }),

} 
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
let response = await p.json();
return response;
}


const mainFunc = async() =>{
    let todo = await createTodo();
    console.log(todo);

}

mainFunc();