var authController = require('../controller/auth.server.controller');

module.exports = function (app) {
    app.post("/hcs/auth/login", authController.login);
    app.post("/hcs/auth/getMenus", authController.getMenus);
}