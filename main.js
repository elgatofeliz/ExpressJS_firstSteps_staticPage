const express = require('express')

const server = express()

server.use(express.static('assets'))

server.use((req, _, next) => {
    console.log("New request:", req.url, ", Method:", req.method)
    next()
})

server.get("/", (req, res) => {
    res.sendFile(`${__dirname}/assets/html/home.html`)
})

server.get("/solutions", (req, res) => {
    res.sendFile(`${__dirname}/assets/html/solutions.html`)
})

server.get("/community", (req, res) => {
    res.sendFile(`${__dirname}/assets/html/community.html`)
})

server.get("/pricing", (req, res) => {
    res.sendFile(`${__dirname}/assets/html/pricing.html`)
})

server.use((_, res) => {
    res.sendFile(`${__dirname}/assets/html/error.html`)
})

const port = 1818
server.listen(port, () => console.log("Listening on port", port))