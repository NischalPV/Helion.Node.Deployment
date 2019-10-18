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
const User_1 = require("./User");
let Space = class Space extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, defaultValue: uuid() }),
    __metadata("design:type", String)
], Space.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Space.prototype, "Name", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Space.prototype, "CreatedDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Space.prototype, "ModifiedDate", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    __metadata("design:type", String)
], Space.prototype, "CreatedById", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    __metadata("design:type", String)
], Space.prototype, "ModifiedById", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], Space.prototype, "CreatedBy", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], Space.prototype, "ModifiedBy", void 0);
Space = __decorate([
    sequelize_typescript_1.Table
], Space);
exports.Space = Space;
//# sourceMappingURL=Space.js.map