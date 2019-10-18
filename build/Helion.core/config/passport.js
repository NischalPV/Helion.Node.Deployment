"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passportLocal = require("passport-local");
const User_1 = require("../entities/User");
const jwt = require("jsonwebtoken");
const secrets_1 = require("../../utils/secrets");
const LocalStrategy = passportLocal.Strategy;
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((id, done) => __awaiter(this, void 0, void 0, function* () {
    yield User_1.User.findOne({ where: { Id: id } })
        .then((user) => done(null, user))
        .catch((err) => done(err));
}));
passport.use(new LocalStrategy({ usernameField: "Username", passwordField: "Password" }, (username, password, done) => __awaiter(this, void 0, void 0, function* () {
    yield User_1.User.findOne({ where: { Username: username } })
        .then((user) => {
        if (!user) {
            return done(undefined, false, { message: `Username ${username} not found.` });
        }
        if (user._validatePassword(password)) {
            return done(null, user);
        }
        return done(undefined, false, { message: "Invalid Username or password." });
    })
        .catch((err) => { return done(err); });
})));
exports.isAuthenticated = (req, res, next) => {
    var token = req.headers["authorization"];
    token = token.replace(/^Bearer\s/, '');
    try {
        let jwtPayload = jwt.verify(token, secrets_1.JWT_SECRET);
        res.locals.jwtPayload = jwtPayload;
        return next();
    }
    catch (error) {
        console.error({ error: error });
    }
    res.status(403).json({ message: "403: Unauthorized" });
};
//# sourceMappingURL=passport.js.map