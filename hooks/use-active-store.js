"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActiveStore = void 0;
var zustand_1 = require("zustand");
exports.useActiveStore = (0, zustand_1.create)(function (set) { return ({
    id: undefined,
    set: function (id) { return set({ id: id }); },
    reset: function () { return set({ id: undefined }); },
}); });
