const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    console.log("Hello Express");
});

app.listen(PORT, console.log("Server Set Up"));
