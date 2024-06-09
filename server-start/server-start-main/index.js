const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
require('dotenv').config();

const app = express();
const port = 3000;

// Conexión a la base de datos
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const userRoutes = require("./routes/userRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const descriptionRoutes = require("./routes/descriptionRoutes");
const chatRoutes = require("./routes/chatOpenRoutes");

app.use("/users", userRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/description", descriptionRoutes);
app.use("/chat", chatRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({info: "Hello World! from Node.js, Express, and PostgreSQL!"});
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
