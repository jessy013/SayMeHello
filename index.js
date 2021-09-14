/**Importation du miniframework Express */
var express = require("express");
/**Création d'une application web via l'objet Express */
var app = express();
/**Configuration de l'application web Express */
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

/**Middleware */
app.param('name', function (req, res, next, name) {
    const modified = name.toUpperCase();
    req.name = modified;
    next();
});

/** Définition des routes */
app.get("/", function (request, response) {
    response.render("homePage");
});

app.get("/hello", function (request, response) {
    response.render("helloPage");
});
app.post("/hello", function (request, response) {
    const name = request.query.name;
    response.render("helloToYouPage", { name: name });
});
app.get('/api/users/:name', function (req, res) {
    res.send('Hello ' + req.name + '!');
});