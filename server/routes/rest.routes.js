const restController = require("../controllers/rest.controller");

module.exports = app => {
    app.get("/api/restaurants", restController.getAllRest);
    app.get("/api/restaurants/:id", restController.getOneRest);
    app.get("/api/getone/:name", restController.getRest);
    app.post("/api/restaurants/new", restController.createRest);
    app.put("/api/restaurants/:id/edit", restController.updateRest);
    app.delete("/api/restaurants/:id/remove", restController.deleteRest);
}