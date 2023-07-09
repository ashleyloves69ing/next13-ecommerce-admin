"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorClient = void 0;
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var button_1 = require("@/components/ui/button");
var data_table_1 = require("@/components/ui/data-table");
var heading_1 = require("@/components/ui/heading");
var separator_1 = require("@/components/ui/separator");
var api_list_1 = require("@/components/ui/api-list");
var columns_1 = require("./columns");
var ColorClient = function (_a) {
    var data = _a.data;
    var params = (0, navigation_1.useParams)();
    var router = (0, navigation_1.useRouter)();
    return (<>
      <div className="flex items-center justify-between">
        <heading_1.Heading title={"Colors (".concat(data.length, ")")} description="Manage colors for your products"/>
        <button_1.Button onClick={function () { return router.push("/".concat(params.storeId, "/colors/new")); }}>
          <lucide_react_1.Plus className="mr-2 h-4 w-4"/> Add New
        </button_1.Button>
      </div>
      <separator_1.Separator />
      <data_table_1.DataTable searchKey="name" columns={columns_1.columns} data={data}/>
      <heading_1.Heading title="API" description="API Calls for Colors"/>
      <separator_1.Separator />
      <api_list_1.ApiList entityName="colors" entityIdName="colorId"/>
    </>);
};
exports.ColorClient = ColorClient;
