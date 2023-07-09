"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var dialog_1 = require("@/components/ui/dialog");
var Modal = function (_a) {
    var title = _a.title, description = _a.description, isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    var onChange = function (open) {
        if (!open) {
            onClose();
        }
    };
    return (<dialog_1.Dialog open={isOpen} onOpenChange={onChange}>
      <dialog_1.DialogContent>
        <dialog_1.DialogHeader>
          <dialog_1.DialogTitle>{title}</dialog_1.DialogTitle>
          <dialog_1.DialogDescription>
            {description}
          </dialog_1.DialogDescription>
        </dialog_1.DialogHeader>
        <div>
          {children}
        </div>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.Modal = Modal;
