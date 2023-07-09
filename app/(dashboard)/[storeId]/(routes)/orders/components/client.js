"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderClient = void 0;
var data_table_1 = require("@/components/ui/data-table");
var heading_1 = require("@/components/ui/heading");
var separator_1 = require("@/components/ui/separator");
var columns_1 = require("./columns");
var OrderClient = function (_a) {
    var data = _a.data;
    return (<>
      <heading_1.Heading title={"Orders (".concat(data.length, ")")} description="Manage orders for your store"/>
      <separator_1.Separator />
      <data_table_1.DataTable searchKey="products" columns={columns_1.columns} data={data}/>
    </>);
};
exports.OrderClient = OrderClient;
