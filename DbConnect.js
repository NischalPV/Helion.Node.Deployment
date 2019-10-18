'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Settings = require("./appsettings.json");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./Helion.core/entities/User");
const Space_1 = require("./Helion.core/entities/Space");
const Device_1 = require("./Helion.core/entities/Device");
const DeviceState_1 = require("./Helion.core/entities/DeviceState");
const DeviceType_1 = require("./Helion.core/entities/DeviceType");
const UserLogin_js_1 = require("./Helion.core/entities/UserLogin.js");
class InitDb {
    constructor() {
        this.AddDbContext();
    }
    AddDbContext() {
        var sequelize = new sequelize_typescript_1.Sequelize(Settings.ConnectionStrings.DefaultConnection.database, Settings.ConnectionStrings.DefaultConnection.user, Settings.ConnectionStrings.DefaultConnection.password, {
            host: `${Settings.ConnectionStrings.DefaultConnection.host}`,
            dialect: 'postgres',
            sync: { force: true },
            // repositoryMode: true,
            models: [User_1.User, Space_1.Space, Device_1.Device, DeviceState_1.DeviceState, DeviceType_1.DeviceType, UserLogin_js_1.UserLogin]
        });
        sequelize.authenticate()
            .then(() => { console.log("Connection Successful"); })
            .catch(() => { console.log("Unable to establish connection"); });
    }
}
exports.default = new InitDb();
//# sourceMappingURL=DbConnect.js.map