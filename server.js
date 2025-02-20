const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Исправлено
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); 
app.use(cors()); // ✅ Разрешаем CORS для всех доменов

app.use("/users", userRoutes);

// Подключение к MongoDB
mongoose.connect("mongodb+srv://zerorich207:zerorich207aliasi@cluster0.julfn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Could not connect to MongoDB:", err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));