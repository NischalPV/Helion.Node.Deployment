"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppSettings = require("../appsettings.json");
class Settings {
    GetValue(key) {
        return AppSettings[key];
    }
}
exports.default = new Settings();
//# sourceMappingURL=settings.js.map