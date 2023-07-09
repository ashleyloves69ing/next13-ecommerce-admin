"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStoreModal = void 0;
var zustand_1 = require("zustand");
exports.useStoreModal = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    onOpen: function () { return set({ isOpen: true }); },
    onClose: function () { return set({ isOpen: false }); },
}); });
