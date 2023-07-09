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
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var separator_1 = require("@/components/ui/separator");
var overview_1 = require("@/components/overview");
var card_1 = require("@/components/ui/card");
var heading_1 = require("@/components/ui/heading");
var get_total_revenue_1 = require("@/actions/get-total-revenue");
var get_sales_count_1 = require("@/actions/get-sales-count");
var get_graph_revenue_1 = require("@/actions/get-graph-revenue");
var get_stock_count_1 = require("@/actions/get-stock-count");
var utils_1 = require("@/lib/utils");
;
var DashboardPage = function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var totalRevenue, graphRevenue, salesCount, stockCount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, get_total_revenue_1.getTotalRevenue)(params.storeId)];
                case 1:
                    totalRevenue = _b.sent();
                    return [4 /*yield*/, (0, get_graph_revenue_1.getGraphRevenue)(params.storeId)];
                case 2:
                    graphRevenue = _b.sent();
                    return [4 /*yield*/, (0, get_sales_count_1.getSalesCount)(params.storeId)];
                case 3:
                    salesCount = _b.sent();
                    return [4 /*yield*/, (0, get_stock_count_1.getStockCount)(params.storeId)];
                case 4:
                    stockCount = _b.sent();
                    return [2 /*return*/, (<div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <heading_1.Heading title="Dashboard" description="Overview of your store"/>
        <separator_1.Separator />
        <div className="grid gap-4 grid-cols-3">
          <card_1.Card>
            <card_1.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <card_1.CardTitle className="text-sm font-medium">
                Total Revenue
              </card_1.CardTitle>
              <lucide_react_1.DollarSign className="h-4 w-4 text-muted-foreground"/>
            </card_1.CardHeader>
            <card_1.CardContent>
              <div className="text-2xl font-bold">{utils_1.formatter.format(totalRevenue)}</div>
            </card_1.CardContent>
          </card_1.Card>
          <card_1.Card>
            <card_1.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <card_1.CardTitle className="text-sm font-medium">Sales</card_1.CardTitle>
              <lucide_react_1.CreditCard className="h-4 w-4 text-muted-foreground"/>
            </card_1.CardHeader>
            <card_1.CardContent>
              <div className="text-2xl font-bold">+{salesCount}</div>
            </card_1.CardContent>
          </card_1.Card>
          <card_1.Card>
            <card_1.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <card_1.CardTitle className="text-sm font-medium">Products In Stock</card_1.CardTitle>
              <lucide_react_1.Package className="h-4 w-4 text-muted-foreground"/>
            </card_1.CardHeader>
            <card_1.CardContent>
              <div className="text-2xl font-bold">{stockCount}</div>
            </card_1.CardContent>
          </card_1.Card>
        </div>
        <card_1.Card className="col-span-4">
          <card_1.CardHeader>
            <card_1.CardTitle>Overview</card_1.CardTitle>
          </card_1.CardHeader>
          <card_1.CardContent className="pl-2">
            <overview_1.Overview data={graphRevenue}/>
          </card_1.CardContent>
        </card_1.Card>
      </div>
    </div>)];
            }
        });
    });
};
exports.default = DashboardPage;
