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
const express_validator_1 = require("express-validator");
const userVM_1 = require("../models/viewModels/userVM");
const UserRepository_1 = require("../../Helion.infrastructure/data/UserRepository");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const secrets_1 = require("../../utils/secrets");
const login_1 = require("../../services/login");
class UserController {
    constructor(userRepository) {
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            express_validator_1.check("email", "Invalid Email").isEmail();
            express_validator_1.check("password", "Password cannot be blank.").isLength({ min: 1 });
            express_validator_1.sanitize("email").normalizeEmail({ gmail_remove_dots: false });
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                req.flash("errors", errors.array());
                return res.redirect("/");
            }
            const user = new userVM_1.RegisterViewModel();
            user.email = req.body.email;
            user.fullName = req.body.fullName;
            user.password = req.body.password;
            user.phoneNumber = req.body.phoneNumber;
            user.username = req.body.phoneNumber;
            user.countryCode = req.body.countryCode;
            const createdUser = yield this._userRepository.CreateUser(user);
            res.status(200).send(createdUser);
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                req.flash("errors", errors.array());
                return res.redirect("/");
            }
            passport.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    console.log(info.message);
                    return res.status(500).send({ msg: info.message });
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    var token = jwt.sign({ id: `${user.Id}`, username: `${user.Username}` }, secrets_1.JWT_SECRET, { expiresIn: "24h" });
                    login_1.default.AddLogin(user.Id);
                    res.status(200).send({ token });
                });
            })(req, res, next);
        });
        this.logout = (req, res) => {
            req.logout();
            res.status(200).send("Logged out.");
        };
        this._userRepository = userRepository;
    }
}
exports.default = new UserController(new UserRepository_1.UserRepository());
//# sourceMappingURL=userController.js.map