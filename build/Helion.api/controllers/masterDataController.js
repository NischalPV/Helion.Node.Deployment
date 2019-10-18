"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const DeviceType_1 = require("../../Helion.core/entities/DeviceType");
class MasterDataController {
    constructor() {
        this.AddDeviceType = (req, res, nxt) => {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                req.flash("errors", errors.array());
                return res.redirect("/");
            }
            const deviceType = new DeviceType_1.DeviceType({
                Name: req.body.name
            });
            deviceType.save();
            return deviceType;
        };
    }
}
exports.default = new MasterDataController();
//# sourceMappingURL=masterDataController.js.map