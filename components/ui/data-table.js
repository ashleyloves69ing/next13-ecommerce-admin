"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
var react_1 = require("react");
var react_table_1 = require("@tanstack/react-table");
var table_1 = require("@/components/ui/table");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
function DataTable(_a) {
    var _b, _c, _d;
    var columns = _a.columns, data = _a.data, searchKey = _a.searchKey;
    var _e = (0, react_1.useState)([]), columnFilters = _e[0], setColumnFilters = _e[1];
    var table = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getPaginationRowModel: (0, react_table_1.getPaginationRowModel)(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        state: {
            columnFilters: columnFilters,
        }
    });
    return (<div>
      <div className="flex items-center py-4">
        <input_1.Input placeholder="Search" value={(_c = (_b = table.getColumn(searchKey)) === null || _b === void 0 ? void 0 : _b.getFilterValue()) !== null && _c !== void 0 ? _c : ""} onChange={function (event) { var _a; return (_a = table.getColumn(searchKey)) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }} className="max-w-sm"/>
      </div>
      <div className="rounded-md border">
        <table_1.Table>
          <table_1.TableHeader>
            {table.getHeaderGroups().map(function (headerGroup) { return (<table_1.TableRow key={headerGroup.id}>
                {headerGroup.headers.map(function (header) {
                return (<table_1.TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext())}
                    </table_1.TableHead>);
            })}
              </table_1.TableRow>); })}
          </table_1.TableHeader>
          <table_1.TableBody>
            {((_d = table.getRowModel().rows) === null || _d === void 0 ? void 0 : _d.length) ? (table.getRowModel().rows.map(function (row) { return (<table_1.TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(function (cell) { return (<table_1.TableCell key={cell.id}>
                      {(0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext())}
                    </table_1.TableCell>); })}
                </table_1.TableRow>); })) : (<table_1.TableRow>
                <table_1.TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </table_1.TableCell>
              </table_1.TableRow>)}
          </table_1.TableBody>
        </table_1.Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <button_1.Button variant="outline" size="sm" onClick={function () { return table.previousPage(); }} disabled={!table.getCanPreviousPage()}>
          Previous
        </button_1.Button>
        <button_1.Button variant="outline" size="sm" onClick={function () { return table.nextPage(); }} disabled={!table.getCanNextPage()}>
          Next
        </button_1.Button>
      </div>
    </div>);
}
exports.DataTable = DataTable;
