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
const User_1 = require("../../Helion.core/entities/User");
class UserRepository {
    CreateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = new User_1.User({
                Username: user.username,
                Email: user.email,
                PhoneNumber: user.phoneNumber,
                FullName: user.fullName,
                CountryCode: user.countryCode,
                NormalizedUsername: user.username.toUpperCase(),
                NormalizedEmail: user.email.toUpperCase()
            });
            newUser._generatePasswordHash(user.password);
            return yield newUser.save();
        });
    }
    UpdateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbUser = yield User_1.User.findOne({ where: { Id: user.Id } });
            if (dbUser) {
                return yield dbUser.update({ FullName: user.FullName });
            }
            else {
                return user;
            }
        });
    }
    DeleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbUser = yield User_1.User.findOne({ where: { Id: id } });
            if (dbUser) {
                yield dbUser.update({ EmailConfirmed: false });
                return true;
            }
            return false;
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.findOne({ where: { Id: id } });
        });
    }
    GetUserByName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.findOne({ where: { Username: username } });
        });
    }
    GetUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.findOne({ where: { Email: email } });
        });
    }
    ListAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.findAll({ where: { EmailConfirmed: true } });
        });
    }
    ConfirmEmail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbUser = yield User_1.User.findOne({ where: { Id: id } });
            if (dbUser) {
                dbUser.update({ EmailConfirmed: true });
                return true;
            }
            return false;
        });
    }
    ConfirmPhoneNumber(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbUser = yield User_1.User.findOne({ where: { Id: id } });
            if (dbUser) {
                dbUser.update({ PhoneNumberConfirmed: true });
                return true;
            }
            return false;
        });
    }
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository();
//# sourceMappingURL=UserRepository.js.map