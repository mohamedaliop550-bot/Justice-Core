const express = require("express");
const path = require("path");
const app = express();

// يخلي كل الملفات تشتغل (html, css, js)
app.use(express.static(path.join(__dirname)));

// الصفحة الأولى (الرئيسية)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});