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
        accessorKey: "billboard",
        header: "Billboard",
        cell: function (_a) {
            var row = _a.row;
            return row.original.billboardLabel;
        },
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
