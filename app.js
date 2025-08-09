const express = require('express')
const app = express()
const port = 3000

app.get('/' (req, res) => {
    res.send('Starting app.js')
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})