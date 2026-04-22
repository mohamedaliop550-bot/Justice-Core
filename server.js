const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// يخلي السيرفر يقرأ كل ملفات HTML و CSS و JS
app.use(express.static(__dirname));

// الصفحة الأولى (home)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});