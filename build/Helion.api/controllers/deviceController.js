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
const gpio_1 = require("../../Helion.core/hardware/gpio");
const rpio = require("rpio");
const DeviceRepository_1 = require("../../Helion.infrastructure/data/DeviceRepository");
class deviceController {
    constructor() {
        this.index = (req, res) => {
            res.json({ message: "Devices" });
        };
        this.control = (req, res) => {
            var id = req.params.id;
            res.json({ message: "device.control", id: id });
        };
        this.controlPost = (req, res, nxt) => __awaiter(this, void 0, void 0, function* () {
            var device = req.body.device;
            var id = parseInt(req.params.id);
            var command = device.command == 0 ? rpio.LOW : rpio.HIGH;
            if (id != device.deviceId) {
                res.status(500).send("Bad Request");
            }
            else {
                var dbDevice = yield DeviceRepository_1.default.GetDeviceById(device.deviceId, device.spaceId);
                if (dbDevice == null) {
                    res.status(404).send("Device not found");
                }
                else {
                    gpio_1.default.write(dbDevice.Gpio, command);
                    res.json(dbDevice);
                }
            }
        });
    }
}
exports.default = new deviceController();
//# sourceMappingURL=deviceController.js.map