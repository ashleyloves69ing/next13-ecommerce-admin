"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModal = void 0;
var react_1 = require("react");
var modal_1 = require("@/components/ui/modal");
var button_1 = require("@/components/ui/button");
var AlertModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onConfirm = _a.onConfirm, loading = _a.loading;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (<modal_1.Modal title="Are you sure?" description="This action cannot be undone." isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <button_1.Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </button_1.Button>
        <button_1.Button disabled={loading} variant="destructive" onClick={onConfirm}>Continue</button_1.Button>
      </div>
    </modal_1.Modal>);
};
exports.AlertModal = AlertModal;
