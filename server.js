const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// يخلي كل الملفات (html, css, js) تشتغل
app.use(express.static(__dirname));

// الصفحة الرئيسية (ترحيب)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});