// message = "Good Global";
// function hello1() {
//     let message = "Good Morning";

//     // let message = "Good Afternoon";
//     console.log("Hello 1: " + message);

//     let c = function hello2() {
//         console.log("I am C" + message)
//     }
//     return c;
// }

// c = hello1();
// c();


function returnFunc() {

    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            let a = 2;
            console.log(a);
            const z = () => {
                let a = 3;
                console.log(a);
            }
            z();
        }
        y();
    }
    return x;
}

let a = returnFunc();
a();
