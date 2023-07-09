"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductModal = void 0;
var zustand_1 = require("zustand");
exports.useProductModal = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    onOpen: function () { return set({ isOpen: true }); },
    onEdit: function (id) { return set({ isOpen: true, isEdit: true, editId: id }); },
    onClose: function () { return set({ isOpen: false, isEdit: false, editId: undefined }); },
}); });
