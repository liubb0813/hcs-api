var userController = require('../../controller/sys/user.server.controller');

module.exports = function (app) {
    app.post("/hcs/sys/getUserList", userController.getUserList);
    app.post("/hcs/sys/findUserById", userController.findUserById);
}