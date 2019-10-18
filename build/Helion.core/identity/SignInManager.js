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
const passport_1 = require("passport");
const passport_local_1 = require("passport-local");
class SignInManager {
    constructor(user, userRepository, signInResult) {
        this.LocalStrategy = passport_local_1.default.Strategy;
        this._user = user;
        this._userRepository = userRepository;
        this._signInResult = signInResult;
    }
    PasswordSignInAsync(user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            passport_1.default.authenticate("local", (err, user, info) => {
                if (err) {
                    this._signInResult.IsNotAllowed = true;
                    this._signInResult.Succeeded = false;
                    this._signInResult.Error = err.message;
                }
                if (!user) { }
            });
            return this._signInResult;
        });
    }
}
//# sourceMappingURL=SignInManager.js.map