"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrigin = void 0;
var react_1 = require("react");
var useOrigin = function () {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    var origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return '';
    }
    return origin;
};
exports.useOrigin = useOrigin;
