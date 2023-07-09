"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var cell_action_1 = require("./cell-action");
exports.columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "value",
        header: "Value",
        cell: function (_a) {
            var row = _a.row;
            return (<div className="flex items-center gap-x-2">
        {row.original.value}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.value }}/>
      </div>);
        }
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: function (_a) {
            var row = _a.row;
            return <cell_action_1.CellAction data={row.original}/>;
        }
    },
];
