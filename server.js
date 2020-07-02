const path = require('path')
const express = require('express')
const app = express()
const port = 8080

const axios = require('axios');

// let { messages, getMessages } = require('./server/kafka');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

app.get('/api/messages', (req, res) => {
    // (function getLatest() {
    //     messages = require('./server/kafka');
    //     res.send(JSON.stringify(messages));
    // })()
    axios.get('http://localhost:8000/api/messages')
        .then((response)=>{
            res.send(response.data)
        })
    // res.send(JSON.stringify({messages: getMessages()}));
})

app.get('/api/cluster_health', (req, res) => res.send('Hello World!'))

app.get('/api/strimzi_status', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))