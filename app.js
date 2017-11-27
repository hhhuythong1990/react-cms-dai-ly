const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const expressValidate = require("express-validator");

const config = require("./app/config/" + (process.env["NODE_ENV"] || "Production"));
const port = config.PORT;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
    session({
        secret: config.SECRET_SESSION,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 2 //2 hours
        }
    })
);
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(expressValidate());


app.use("/api", require("./app/controllers/LoginController"));
app.use("/api", require("./app/controllers/ModuleController"));


app.use("/*", require("./app/controllers/IndexController"));

app.listen(port, () => {
    console.log("Server started on port " + port);
});