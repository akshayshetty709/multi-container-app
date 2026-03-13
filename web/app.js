const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "mydb"
});

db.connect(err => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Multi Container App Running Successfully 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
