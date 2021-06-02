const express = require('express')
const app = express()
const port = 3000
const appName = 'Bonitasoft Front-end'

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
})
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`${appName} app listening at http://localhost:${port}`)
})

