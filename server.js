const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// السماح بتحميل كل الملفات (html, css, js)
app.use(express.static(__dirname));

// الصفحة الرئيسية (صفحة الترحيب)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// صفحة الموقع
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});