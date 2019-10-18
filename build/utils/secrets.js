"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const Settings = require("../appsettings.json");
if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}
else {
    dotenv.config({ path: ".env.example" });
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === "production"; // Anything else is treated as 'dev'
exports.SESSION_SECRET = Settings.Secrets.Session;
exports.JWT_SECRET = Settings.JWT.Secret;
if (!exports.SESSION_SECRET) {
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map