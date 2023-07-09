"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCategoryModal = void 0;
var zustand_1 = require("zustand");
exports.useCategoryModal = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    onOpen: function () { return set({ isOpen: true }); },
    onEdit: function (id) { return set({ isOpen: true, isEdit: true, editId: id }); },
    onClose: function () { return set({ isOpen: false, isEdit: false, editId: undefined }); },
}); });
