"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAlert = void 0;
var lucide_react_1 = require("lucide-react");
var react_hot_toast_1 = require("react-hot-toast");
var alert_1 = require("@/components/ui/alert");
var badge_1 = require("@/components/ui/badge");
var button_1 = require("@/components/ui/button");
;
var textMap = {
    public: 'Public',
    admin: 'Admin'
};
var variantMap = {
    public: 'secondary',
    admin: 'destructive'
};
var ApiAlert = function (_a) {
    var title = _a.title, description = _a.description, _b = _a.variant, variant = _b === void 0 ? "public" : _b;
    var onCopy = function (description) {
        navigator.clipboard.writeText(description);
        react_hot_toast_1.toast.success('API Route copied to clipboard.');
    };
    return (<alert_1.Alert>
      <lucide_react_1.Server className="h-4 w-4"/>
      <alert_1.AlertTitle className="flex items-center gap-x-2">
        {title}
        <badge_1.Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </badge_1.Badge>
      </alert_1.AlertTitle>
      <alert_1.AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <button_1.Button variant="outline" size="sm" onClick={function () { return onCopy(description); }}>
          <lucide_react_1.Copy className="h-4 w-4"/>
        </button_1.Button>
      </alert_1.AlertDescription>
    </alert_1.Alert>);
};
exports.ApiAlert = ApiAlert;
