const express = require('express')
const utils = require('./dist/bonita-utils');
const app = express()
const port = 3000
const appName = 'Bonitasoft Front-end'

app.set('utils', utils)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})
app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
  console.log(`${appName} app listening at http://localhost:${port}`)
})
