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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
var server_1 = require("next/server");
var prismadb_1 = __importDefault(require("@/lib/prismadb"));
var nextjs_1 = require("@clerk/nextjs");
function POST(req, _a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var userId, body, name_1, value, storeByUserId, color, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    userId = (0, nextjs_1.auth)().userId;
                    return [4 /*yield*/, req.json()];
                case 1:
                    body = _b.sent();
                    name_1 = body.name, value = body.value;
                    if (!userId) {
                        return [2 /*return*/, new server_1.NextResponse("Unauthenticated", { status: 403 })];
                    }
                    if (!name_1) {
                        return [2 /*return*/, new server_1.NextResponse("Name is required", { status: 400 })];
                    }
                    if (!value) {
                        return [2 /*return*/, new server_1.NextResponse("Value is required", { status: 400 })];
                    }
                    if (!params.storeId) {
                        return [2 /*return*/, new server_1.NextResponse("Store id is required", { status: 400 })];
                    }
                    return [4 /*yield*/, prismadb_1.default.store.findFirst({
                            where: {
                                id: params.storeId,
                                userId: userId
                            }
                        })];
                case 2:
                    storeByUserId = _b.sent();
                    if (!storeByUserId) {
                        return [2 /*return*/, new server_1.NextResponse("Unauthorized", { status: 405 })];
                    }
                    return [4 /*yield*/, prismadb_1.default.color.create({
                            data: {
                                name: name_1,
                                value: value,
                                storeId: params.storeId
                            }
                        })];
                case 3:
                    color = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(color)];
                case 4:
                    error_1 = _b.sent();
                    console.log('[COLORS_POST]', error_1);
                    return [2 /*return*/, new server_1.NextResponse("Internal error", { status: 500 })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
;
function GET(req, _a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var colors, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    if (!params.storeId) {
                        return [2 /*return*/, new server_1.NextResponse("Store id is required", { status: 400 })];
                    }
                    return [4 /*yield*/, prismadb_1.default.color.findMany({
                            where: {
                                storeId: params.storeId
                            }
                        })];
                case 1:
                    colors = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(colors)];
                case 2:
                    error_2 = _b.sent();
                    console.log('[COLORS_GET]', error_2);
                    return [2 /*return*/, new server_1.NextResponse("Internal error", { status: 500 })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
;
