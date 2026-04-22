const express = require("express");
const path = require("path");

const app = express();

// يخدم كل الملفات (HTML, CSS, JS)
app.use(express.static(__dirname));

// الصفحة الرئيسية (home.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});