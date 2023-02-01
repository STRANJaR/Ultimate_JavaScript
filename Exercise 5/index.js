let msg = [
    "Initializing Hacking...",
    "Connecting to Instagram",
    "Connecting to Server",
    "Connection Faild. Trying...",
    "Connecting to Server 2",
    "Connected Successfully...",
    "Username --> rohit_shrivastav_25",
    "Trying Brute Force",
    "149k Password tried...",
    "Match Not Found 404",
    "195k Password tried...",
    "Match Not Found 404",
    "200k Password tried...",
    "Match Found Successfully",
    "Password --> ********",
    "User name + Password sent successfully on your email (rohitrks805@gmail.com)",
    "Access Granted !"

]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 1000)

    })
}

const showHack = async (messege) => {
    await sleep(2);
    // console.log(messege);
    hackDiv.innerHTML = hackDiv.innerHTML + messege + "<br>";
}
(async () => {
    for (let i = 0; i < msg.length; i++) {
        await showHack(msg[i]);
    }
})()

