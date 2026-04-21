const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

let users = [];

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// تسجيل حساب
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    const exists = users.find(u => u.username === username);
    if (exists) return res.send("⚠️ المستخدم موجود");

    users.push({ username, password });
    res.send("✅ تم إنشاء الحساب");
});

// تسجيل دخول
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = username;
        res.redirect("/dashboard.html");
    } else {
        res.send("❌ خطأ");
    }
});

// حماية الداشبورد
app.get("/dashboard.html", (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + "/dashboard.html");
    } else {
        res.send("⛔ لازم تسجل دخول");
    }
});

// تسجيل خروج
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

// 💬 الشات
io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});