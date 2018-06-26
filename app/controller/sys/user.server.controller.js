var userMock = require('../../mock/sys/user.mock');

module.exports = {

    getUserList: function (req, res, next) {
        var userList = [];
        for (var i = req.body.offset; i < parseInt(req.body.offset) + parseInt(req.body.limit); i++) {
            userList.push(userMock[i]);
        }
        var data = {total: userMock.length, userList: userList};
        res.json({code: 200, data: data, msg: "ok"});
    },
    findUserById: function (req, res, next) {
        for (var i = 0; i < userMock.length; i++) {
            if (userMock[i].id == req.body.id) {
                res.json({code: 200, data: userMock[i], msg: "ok"});
            }
        }
        res.json({code: 200, data: null, msg: "not found"});
    }

}