"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rpio = require("rpio");
class Gpio {
    write(pin, state, def = rpio.LOW) {
        rpio.open(pin, rpio.OUTPUT, def);
        rpio.write(pin, state);
    }
    read(pin) {
        rpio.open(pin, rpio.INPUT);
        return rpio.read(pin);
    }
}
exports.default = new Gpio();
//# sourceMappingURL=gpio.js.map