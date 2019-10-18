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
const Space_1 = require("./Space");
const User_1 = require("./User");
const DeviceType_1 = require("./DeviceType");
let Device = class Device extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Device.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Device.prototype, "Name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    sequelize_typescript_1.ForeignKey(() => Space_1.Space),
    __metadata("design:type", String)
], Device.prototype, "SpaceId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Device.prototype, "CreatedDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Device.prototype, "ModifiedDate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    __metadata("design:type", String)
], Device.prototype, "CreatedById", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    __metadata("design:type", String)
], Device.prototype, "ModifiedById", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => DeviceType_1.DeviceType),
    __metadata("design:type", Number)
], Device.prototype, "DeviceTypeId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Device.prototype, "Gpio", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Space_1.Space),
    __metadata("design:type", Space_1.Space)
], Device.prototype, "space", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], Device.prototype, "CreatedBy", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], Device.prototype, "ModifiedBy", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => DeviceType_1.DeviceType),
    __metadata("design:type", DeviceType_1.DeviceType)
], Device.prototype, "DeviceType", void 0);
Device = __decorate([
    sequelize_typescript_1.Table
], Device);
exports.Device = Device;
//# sourceMappingURL=Device.js.map