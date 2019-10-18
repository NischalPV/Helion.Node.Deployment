"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const homeController_1 = require("./Helion.api/controllers/homeController");
const deviceController_1 = require("./Helion.api/controllers/deviceController");
const userController_1 = require("./Helion.api/controllers/userController");
const masterDataController_1 = require("./Helion.api/controllers/masterDataController");
const passportConfig = require("./Helion.core/config/passport");
const secrets_1 = require("./utils/secrets");
const cors = require("cors");
const helmet = require("helmet");
app_1.default.use(cors());
app_1.default.use(helmet());
app_1.default.use(bodyParser.json());
app_1.default.use(bodyParser.urlencoded({ extended: true }));
app_1.default.use(session({
    resave: false,
    saveUninitialized: true,
    secret: secrets_1.SESSION_SECRET
}));
app_1.default.use(passport.initialize());
app_1.default.use(passport.session());
app_1.default.get("/", homeController_1.default.index);
app_1.default.get("/devices", deviceController_1.default.index);
app_1.default.get("/devices/control/:id", [passportConfig.isAuthenticated], deviceController_1.default.control);
app_1.default.post("/devices/control/:id", [passportConfig.isAuthenticated], deviceController_1.default.controlPost);
app_1.default.post("/users/create", userController_1.default.register);
app_1.default.post("/masterdata/devicetypes/add", passportConfig.isAuthenticated, masterDataController_1.default.AddDeviceType);
app_1.default.post("/login", userController_1.default.login);
app_1.default.get("/logout", userController_1.default.logout);
const server = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=index.js.map