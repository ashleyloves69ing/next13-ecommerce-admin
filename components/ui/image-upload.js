"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_cloudinary_1 = require("next-cloudinary");
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var image_1 = __importDefault(require("next/image"));
var lucide_react_1 = require("lucide-react");
var ImageUpload = function (_a) {
    var disabled = _a.disabled, onChange = _a.onChange, onRemove = _a.onRemove, value = _a.value;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    var onUpload = function (result) {
        onChange(result.info.secure_url);
    };
    if (!isMounted) {
        return null;
    }
    return (<div>
      <div className="mb-4 flex items-center gap-4">
        {value.map(function (url) { return (<div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <button_1.Button type="button" onClick={function () { return onRemove(url); }} variant="destructive" size="sm">
                <lucide_react_1.Trash className="h-4 w-4"/>
              </button_1.Button>
            </div>
            <image_1.default fill className="object-cover" alt="Image" src={url}/>
          </div>); })}
      </div>
      <next_cloudinary_1.CldUploadWidget onUpload={onUpload} uploadPreset="t4drjppf">
        {function (_a) {
            var open = _a.open;
            var onClick = function () {
                open();
            };
            return (<button_1.Button type="button" disabled={disabled} variant="secondary" onClick={onClick}>
              <lucide_react_1.ImagePlus className="h-4 w-4 mr-2"/>
              Upload an Image
            </button_1.Button>);
        }}
      </next_cloudinary_1.CldUploadWidget>
    </div>);
};
exports.default = ImageUpload;
