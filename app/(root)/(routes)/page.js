"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_store_modal_1 = require("@/hooks/use-store-modal");
var SetupPage = function () {
    var onOpen = (0, use_store_modal_1.useStoreModal)(function (state) { return state.onOpen; });
    var isOpen = (0, use_store_modal_1.useStoreModal)(function (state) { return state.isOpen; });
    (0, react_1.useEffect)(function () {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);
    return null;
};
exports.default = SetupPage;
