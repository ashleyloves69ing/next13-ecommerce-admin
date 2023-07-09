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
exports.GET = exports.POST = void 0;
var server_1 = require("next/server");
var nextjs_1 = require("@clerk/nextjs");
var prismadb_1 = __importDefault(require("@/lib/prismadb"));
function POST(req, _a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var userId, body, name_1, price, categoryId, colorId, sizeId, images, isFeatured, isArchived, storeByUserId, product, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    userId = (0, nextjs_1.auth)().userId;
                    return [4 /*yield*/, req.json()];
                case 1:
                    body = _b.sent();
                    name_1 = body.name, price = body.price, categoryId = body.categoryId, colorId = body.colorId, sizeId = body.sizeId, images = body.images, isFeatured = body.isFeatured, isArchived = body.isArchived;
                    if (!userId) {
                        return [2 /*return*/, new server_1.NextResponse("Unauthenticated", { status: 403 })];
                    }
                    if (!name_1) {
                        return [2 /*return*/, new server_1.NextResponse("Name is required", { status: 400 })];
                    }
                    if (!images || !images.length) {
                        return [2 /*return*/, new server_1.NextResponse("Images are required", { status: 400 })];
                    }
                    if (!price) {
                        return [2 /*return*/, new server_1.NextResponse("Price is required", { status: 400 })];
                    }
                    if (!categoryId) {
                        return [2 /*return*/, new server_1.NextResponse("Category id is required", { status: 400 })];
                    }
                    if (!colorId) {
                        return [2 /*return*/, new server_1.NextResponse("Color id is required", { status: 400 })];
                    }
                    if (!sizeId) {
                        return [2 /*return*/, new server_1.NextResponse("Size id is required", { status: 400 })];
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
                    return [4 /*yield*/, prismadb_1.default.product.create({
                            data: {
                                name: name_1,
                                price: price,
                                isFeatured: isFeatured,
                                isArchived: isArchived,
                                categoryId: categoryId,
                                colorId: colorId,
                                sizeId: sizeId,
                                storeId: params.storeId,
                                images: {
                                    createMany: {
                                        data: __spreadArray([], images.map(function (image) { return image; }), true),
                                    },
                                },
                            },
                        })];
                case 3:
                    product = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(product)];
                case 4:
                    error_1 = _b.sent();
                    console.log('[PRODUCTS_POST]', error_1);
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
        var searchParams, categoryId, colorId, sizeId, isFeatured, products, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    searchParams = new URL(req.url).searchParams;
                    categoryId = searchParams.get('categoryId') || undefined;
                    colorId = searchParams.get('colorId') || undefined;
                    sizeId = searchParams.get('sizeId') || undefined;
                    isFeatured = searchParams.get('isFeatured');
                    if (!params.storeId) {
                        return [2 /*return*/, new server_1.NextResponse("Store id is required", { status: 400 })];
                    }
                    return [4 /*yield*/, prismadb_1.default.product.findMany({
                            where: {
                                storeId: params.storeId,
                                categoryId: categoryId,
                                colorId: colorId,
                                sizeId: sizeId,
                                isFeatured: isFeatured ? true : undefined,
                                isArchived: false,
                            },
                            include: {
                                images: true,
                                category: true,
                                color: true,
                                size: true,
                            },
                            orderBy: {
                                createdAt: 'desc',
                            }
                        })];
                case 1:
                    products = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(products)];
                case 2:
                    error_2 = _b.sent();
                    console.log('[PRODUCTS_GET]', error_2);
                    return [2 /*return*/, new server_1.NextResponse("Internal error", { status: 500 })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
;
