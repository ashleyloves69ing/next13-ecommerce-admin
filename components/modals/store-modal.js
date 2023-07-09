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
exports.StoreModal = void 0;
var z = __importStar(require("zod"));
var axios_1 = __importDefault(require("axios"));
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var modal_1 = require("@/components/ui/modal");
var input_1 = require("@/components/ui/input");
var form_1 = require("@/components/ui/form");
var use_store_modal_1 = require("@/hooks/use-store-modal");
var button_1 = require("@/components/ui/button");
var formSchema = z.object({
    name: z.string().min(1),
});
var StoreModal = function () {
    var storeModal = (0, use_store_modal_1.useStoreModal)();
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            name: "",
        },
    });
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoading(true);
                    return [4 /*yield*/, axios_1.default.post('/api/stores', values)];
                case 1:
                    response = _a.sent();
                    window.location.assign("/".concat(response.data.id));
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    react_hot_toast_1.toast.error('Something went wrong');
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<modal_1.Modal title="Create store" description="Add a new store to manage products and categories." isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <form_1.Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <form_1.FormField control={form.control} name="name" render={function (_a) {
            var field = _a.field;
            return (<form_1.FormItem>
                      <form_1.FormLabel>Name</form_1.FormLabel>
                      <form_1.FormControl>
                        <input_1.Input disabled={loading} placeholder="E-Commerce" {...field}/>
                      </form_1.FormControl>
                      <form_1.FormMessage />
                    </form_1.FormItem>);
        }}/>
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <button_1.Button disabled={loading} variant="outline" onClick={storeModal.onClose}>
                    Cancel
                  </button_1.Button>
                  <button_1.Button disabled={loading} type="submit">Continue</button_1.Button>
                </div>
              </form>
            </form_1.Form>
          </div>
        </div>
      </div>
    </modal_1.Modal>);
};
exports.StoreModal = StoreModal;
