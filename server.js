const express = require("express");
const path = require("path");

const app = express();

// الصفحة الرئيسية (الترحيب)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// صفحة القنوات
app.get("/streams", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("Server running 🔥");
});