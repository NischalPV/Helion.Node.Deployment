"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid = require("uuid/v4");
const bcrypt = require("bcrypt-nodejs");
let User = class User extends sequelize_typescript_1.Model {
    _generatePasswordHash(password) {
        let salt = bcrypt.genSaltSync(10);
        if (salt.length > 0) {
            this.PasswordHash = bcrypt.hashSync(password, salt);
        }
    }
    _validatePassword(password) {
        return bcrypt.compareSync(password, this.PasswordHash);
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: uuid() }),
    __metadata("design:type", String)
], User.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "NormalizedUsername", void 0);
__decorate([
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "NormalizedEmail", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: true }),
    __metadata("design:type", Boolean)
], User.prototype, "EmailConfirmed", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], User.prototype, "PasswordHash", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: uuid().toString() }),
    __metadata("design:type", String)
], User.prototype, "SecurityStamp", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: uuid().toString() }),
    __metadata("design:type", String)
], User.prototype, "ConcurrencyStamp", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], User.prototype, "PhoneNumber", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "PhoneNumberConfirmed", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "TwoFactorEnabled", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "LockoutEnd", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], User.prototype, "AccessFailedCount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], User.prototype, "FullName", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "CreatedDate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], User.prototype, "CountryCode", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=User.js.map