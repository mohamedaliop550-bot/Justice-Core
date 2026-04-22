const express = require("express");
const path = require("path");

const app = express();

// يخلي كل الملفات تشتغل
app.use(express.static(__dirname));

// الصفحة الأولى (home)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// تشغيل السيرفر
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});