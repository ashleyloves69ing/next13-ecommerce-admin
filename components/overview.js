"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
var recharts_1 = require("recharts");
;
var Overview = function (_a) {
    var data = _a.data;
    return (<recharts_1.ResponsiveContainer width="100%" height={350}>
      <recharts_1.BarChart data={data}>
        <recharts_1.XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
        <recharts_1.YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={function (value) { return "$".concat(value); }}/>
        <recharts_1.Bar dataKey="total" fill="#3498db" radius={[4, 4, 0, 0]}/>
      </recharts_1.BarChart>
    </recharts_1.ResponsiveContainer>);
};
exports.Overview = Overview;
