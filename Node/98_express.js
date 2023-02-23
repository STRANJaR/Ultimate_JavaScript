const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, './96_template.html'));
console.log(req);
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

