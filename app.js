// carregando mondulos
const express = require("express");
const handlebars = require("express-handlebars");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin");
const path = require("path");
const mongoose = require('mongoose');

//configurações
//public
app.use(express.static("public")); //bodyPars
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts", // <- aqui e a maior mudanca de versao, aqui mapeia o layout
  })
);
app.set("view engine", "handlebars");
app.set("views", __dirname +"\\views"); //<-- aqui mapeia a pasta de views

//mongosse
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/mongo');
}

//rotas
app.use("/admin", admin);

// outras
const PORT = 8081;
app.listen(PORT, () => {
  console.log("servidor rodando");
});
