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
const User_1 = require("../Helion.core/entities/User");
const bcrypt = require("bcrypt-nodejs");
class UserService {
    CreateUser(user, passwordHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.User({
                Username: user.username,
                Email: user.email,
                PhoneNumber: user.phoneNumber,
                FullName: user.fullName,
                CountryCode: user.countryCode,
                NormalizedUsername: user.username.toUpperCase(),
                NormalizedEmail: user.email.toUpperCase(),
                PasswordHash: passwordHash
            });
            yield newUser.save();
            return newUser;
        });
    }
    generateHash(str) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.CreatePasswordHash(str);
        });
    }
    // private passwordHash: string;
    CreatePasswordHash(password) {
        return __awaiter(this, void 0, void 0, function* () {
            let passwordHash = "";
            yield bcrypt.genSalt(10, (err, salt) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    console.error(err);
                }
                yield bcrypt.hash(password, salt, () => { }, (err, hash) => {
                    if (err) {
                        console.error(err);
                    }
                    passwordHash = hash;
                    return passwordHash;
                });
                return passwordHash;
            }));
            return passwordHash;
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.js.map