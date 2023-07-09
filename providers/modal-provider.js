"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = void 0;
var react_1 = require("react");
var store_modal_1 = require("@/components/modals/store-modal");
var ModalProvider = function () {
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (<>
      <store_modal_1.StoreModal />
    </>);
};
exports.ModalProvider = ModalProvider;
