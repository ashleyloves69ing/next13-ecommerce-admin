"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsForm = void 0;
var z = __importStar(require("zod"));
var axios_1 = __importDefault(require("axios"));
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var react_hot_toast_1 = require("react-hot-toast");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var separator_1 = require("@/components/ui/separator");
var heading_1 = require("@/components/ui/heading");
var alert_modal_1 = require("@/components/modals/alert-modal");
var api_alert_1 = require("@/components/ui/api-alert");
var use_origin_1 = require("@/hooks/use-origin");
var formSchema = z.object({
    name: z.string().min(2),
});
;
var SettingsForm = function (_a) {
    var initialData = _a.initialData;
    var params = (0, navigation_1.useParams)();
    var router = (0, navigation_1.useRouter)();
    var origin = (0, use_origin_1.useOrigin)();
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: initialData
    });
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoading(true);
                    return [4 /*yield*/, axios_1.default.patch("/api/stores/".concat(params.storeId), data)];
                case 1:
                    _a.sent();
                    router.refresh();
                    react_hot_toast_1.toast.success('Store updated.');
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    react_hot_toast_1.toast.error('Something went wrong.');
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoading(true);
                    return [4 /*yield*/, axios_1.default.delete("/api/stores/".concat(params.storeId))];
                case 1:
                    _a.sent();
                    router.refresh();
                    router.push('/');
                    react_hot_toast_1.toast.success('Store deleted.');
                    return [3 /*break*/, 4];
                case 2:
                    error_2 = _a.sent();
                    react_hot_toast_1.toast.error('Make sure you removed all products and categories first.');
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    setOpen(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<>
    <alert_modal_1.AlertModal isOpen={open} onClose={function () { return setOpen(false); }} onConfirm={onDelete} loading={loading}/>
     <div className="flex items-center justify-between">
        <heading_1.Heading title="Store settings" description="Manage store preferences"/>
        <button_1.Button disabled={loading} variant="destructive" size="sm" onClick={function () { return setOpen(true); }}>
          <lucide_react_1.Trash className="h-4 w-4"/>
        </button_1.Button>
      </div>
      <separator_1.Separator />
      <form_1.Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <div className="grid grid-cols-3 gap-8">
            <form_1.FormField control={form.control} name="name" render={function (_a) {
            var field = _a.field;
            return (<form_1.FormItem>
                  <form_1.FormLabel>Name</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input disabled={loading} placeholder="Store name" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>);
        }}/>
          </div>
          <button_1.Button disabled={loading} className="ml-auto" type="submit">
            Save changes
          </button_1.Button>
        </form>
      </form_1.Form>
      <separator_1.Separator />
      <api_alert_1.ApiAlert title="NEXT_PUBLIC_API_URL" variant="public" description={"".concat(origin, "/api/").concat(params.storeId)}/>
    </>);
};
exports.SettingsForm = SettingsForm;
