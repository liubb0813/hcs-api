var authMock = require('../mock/auth.mock');

module.exports = {

    login: function (req, res, next) {
        for (var i in authMock.users) {
            var user = authMock.users[i];
            if (req.body.username == user.username && req.body.password == user.password) {
                req.session.user = user;
                res.json({code: 200, data: user, msg: "ok"});
            }
        }
        res.json({code: 401, data: null, msg: "not ok"});
    },
    getMenus: function (req, res, next) {
        var menus;
        if (req.session.user.username == 'admin') {
            menus = authMock.menusAdmin;
        } else {
            menus = authMock.menusUser;
        }
        res.json({code: 200, data: menus, msg: "ok"});
    }

}