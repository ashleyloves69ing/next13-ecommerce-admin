"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiList = void 0;
var api_alert_1 = require("@/components/ui/api-alert");
var use_origin_1 = require("@/hooks/use-origin");
var navigation_1 = require("next/navigation");
var ApiList = function (_a) {
    var entityName = _a.entityName, entityIdName = _a.entityIdName;
    var params = (0, navigation_1.useParams)();
    var origin = (0, use_origin_1.useOrigin)();
    var baseUrl = "".concat(origin, "/api/").concat(params.storeId);
    return (<>
      <api_alert_1.ApiAlert title="GET" variant="public" description={"".concat(baseUrl, "/").concat(entityName)}/>
      <api_alert_1.ApiAlert title="GET" variant="public" description={"".concat(baseUrl, "/").concat(entityName, "/{").concat(entityIdName, "}")}/>
      <api_alert_1.ApiAlert title="POST" variant="admin" description={"".concat(baseUrl, "/").concat(entityName)}/>
      <api_alert_1.ApiAlert title="PATCH" variant="admin" description={"".concat(baseUrl, "/").concat(entityName, "/{").concat(entityIdName, "}")}/>
      <api_alert_1.ApiAlert title="DELETE" variant="admin" description={"".concat(baseUrl, "/").concat(entityName, "/{").concat(entityIdName, "}")}/>
    </>);
};
exports.ApiList = ApiList;
