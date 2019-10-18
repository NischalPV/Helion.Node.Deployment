"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const startup_1 = require("./startup");
const app = express();
// Express configuration
app.set("port", process.env.PORT || 3000);
startup_1.default;
exports.default = app;
//# sourceMappingURL=app.js.map