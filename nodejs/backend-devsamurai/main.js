const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    return res.json({
        title: "hello",
        message: "Foque nos estudos, ok?!"
    });
})

server.listen(3000);