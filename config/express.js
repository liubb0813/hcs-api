var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function () {
    var app = express();

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:9000");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Credentials","true");
        next();
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(cookieParser());
    app.use(session({
        secret: '0ae56df4-532e-4bc3-9612-4ef7ab66cef4',
        cookie: {maxAge: 60 * 1000 * 30}
    }));

    app.use(function (req, res, next) {
        if (!req.session.user && req.url != '/hcs/auth/login') {
            res.json({code: 401, data: null, msg: 'not login'});
        }
        next();
    });

    require('../app/route/auth.server.route')(app);
    require('../app/route/sys/user.server.route')(app);

    app.use(function (req, res, next) {
        res.status(404);
        try {
            res.json('not found');
        } catch (e) {
            console.log('error');
        }
    })

    app.use(function (err, req, res, next) {
        if (!err) {
            return next();
        }
        res.status(500);
        try {
            res.json('server error');
        } catch (e) {
            console.log('error');
        }
    })

    return app;
}