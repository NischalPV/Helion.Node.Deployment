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
const Device_1 = require("./Device");
const User_1 = require("./User");
let DeviceState = class DeviceState extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: uuid() }),
    __metadata("design:type", String)
], DeviceState.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => Device_1.Device),
    __metadata("design:type", Number)
], DeviceState.prototype, "DeviceId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", Object)
], DeviceState.prototype, "State", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    __metadata("design:type", String)
], DeviceState.prototype, "UserId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], DeviceState.prototype, "CreatedDate", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Device_1.Device),
    __metadata("design:type", Device_1.Device)
], DeviceState.prototype, "device", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], DeviceState.prototype, "user", void 0);
DeviceState = __decorate([
    sequelize_typescript_1.Table
], DeviceState);
exports.DeviceState = DeviceState;
//# sourceMappingURL=DeviceState.js.map