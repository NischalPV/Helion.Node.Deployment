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
const DeviceType_1 = require("../../Helion.core/entities/DeviceType");
const Device_1 = require("../../Helion.core/entities/Device");
class DeviceRepository {
    ListDeviceTypesAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let devicetypes = yield DeviceType_1.DeviceType.findAll({ where: { IsActive: true } });
            return devicetypes;
        });
    }
    CreateDeviceTypeAsync(deviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield deviceType.save();
        });
    }
    UpdateDeviceTypeAsync(deviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbDeviceType = yield DeviceType_1.DeviceType.findOne({ where: { Id: deviceType.Id } });
            if (dbDeviceType) {
                return yield dbDeviceType.update({ Name: deviceType.Name });
            }
            else {
                return deviceType;
            }
        });
    }
    DeleteDeviceType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbDeviceType = yield DeviceType_1.DeviceType.findOne({ where: { Id: id } });
            if (dbDeviceType) {
                yield dbDeviceType.update({ IsActive: false });
                return true;
            }
            else {
                return false;
            }
        });
    }
    ListAllDevicesAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    CreateDeviceAsync(device) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    UpdateDeviceAsync(device) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    DeleteDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    GetDeviceById(id, spaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Device_1.Device.findOne({ where: { Id: id, SpaceId: spaceId } });
        });
    }
}
exports.default = new DeviceRepository();
//# sourceMappingURL=DeviceRepository.js.map