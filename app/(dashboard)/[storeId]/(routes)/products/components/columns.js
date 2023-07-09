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
        accessorKey: "isArchived",
        header: "Archived",
    },
    {
        accessorKey: "isFeatured",
        header: "Featured",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "color",
        header: "Color",
        cell: function (_a) {
            var row = _a.row;
            return (<div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }}/>
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
