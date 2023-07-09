"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
var headers_1 = require("next/headers");
var server_1 = require("next/server");
var stripe_1 = require("@/lib/stripe");
var prismadb_1 = __importDefault(require("@/lib/prismadb"));
function POST(req) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var body, signature, event, session, address, addressComponents, addressString, order, productIds;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, req.text()];
                case 1:
                    body = _d.sent();
                    signature = (0, headers_1.headers)().get("Stripe-Signature");
                    try {
                        event = stripe_1.stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
                    }
                    catch (error) {
                        return [2 /*return*/, new server_1.NextResponse("Webhook Error: ".concat(error.message), { status: 400 })];
                    }
                    session = event.data.object;
                    address = (_a = session === null || session === void 0 ? void 0 : session.customer_details) === null || _a === void 0 ? void 0 : _a.address;
                    addressComponents = [
                        address === null || address === void 0 ? void 0 : address.line1,
                        address === null || address === void 0 ? void 0 : address.line2,
                        address === null || address === void 0 ? void 0 : address.city,
                        address === null || address === void 0 ? void 0 : address.state,
                        address === null || address === void 0 ? void 0 : address.postal_code,
                        address === null || address === void 0 ? void 0 : address.country
                    ];
                    addressString = addressComponents.filter(function (c) { return c !== null; }).join(', ');
                    if (!(event.type === "checkout.session.completed")) return [3 /*break*/, 4];
                    return [4 /*yield*/, prismadb_1.default.order.update({
                            where: {
                                id: (_b = session === null || session === void 0 ? void 0 : session.metadata) === null || _b === void 0 ? void 0 : _b.orderId,
                            },
                            data: {
                                isPaid: true,
                                address: addressString,
                                phone: ((_c = session === null || session === void 0 ? void 0 : session.customer_details) === null || _c === void 0 ? void 0 : _c.phone) || '',
                            },
                            include: {
                                orderItems: true,
                            }
                        })];
                case 2:
                    order = _d.sent();
                    productIds = order.orderItems.map(function (orderItem) { return orderItem.productId; });
                    return [4 /*yield*/, prismadb_1.default.product.updateMany({
                            where: {
                                id: {
                                    in: __spreadArray([], productIds, true),
                                },
                            },
                            data: {
                                isArchived: true
                            }
                        })];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4: return [2 /*return*/, new server_1.NextResponse(null, { status: 200 })];
            }
        });
    });
}
exports.POST = POST;
;
