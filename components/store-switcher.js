"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var button_1 = require("@/components/ui/button");
var command_1 = require("@/components/ui/command");
var popover_1 = require("@/components/ui/popover");
var use_store_modal_1 = require("@/hooks/use-store-modal");
var navigation_1 = require("next/navigation");
function StoreSwitcher(_a) {
    var className = _a.className, _b = _a.items, items = _b === void 0 ? [] : _b;
    var storeModal = (0, use_store_modal_1.useStoreModal)();
    var params = (0, navigation_1.useParams)();
    var router = (0, navigation_1.useRouter)();
    var formattedItems = items.map(function (item) { return ({
        label: item.name,
        value: item.id
    }); });
    var currentStore = formattedItems.find(function (item) { return item.value === params.storeId; });
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var onStoreSelect = function (store) {
        setOpen(false);
        router.push("/".concat(store.value));
    };
    return (<popover_1.Popover open={open} onOpenChange={setOpen}>
      <popover_1.PopoverTrigger asChild>
        <button_1.Button variant="outline" size="sm" role="combobox" aria-expanded={open} aria-label="Select a store" className={(0, utils_1.cn)("w-[200px] justify-between", className)}>
          <lucide_react_1.Store className="mr-2 h-4 w-4"/>
          {currentStore === null || currentStore === void 0 ? void 0 : currentStore.label}
          <lucide_react_1.ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50"/>
        </button_1.Button>
      </popover_1.PopoverTrigger>
      <popover_1.PopoverContent className="w-[200px] p-0">
        <command_1.Command>
          <command_1.CommandList>
            <command_1.CommandInput placeholder="Search store..."/>
            <command_1.CommandEmpty>No store found.</command_1.CommandEmpty>
            <command_1.CommandGroup heading="Stores">
              {formattedItems.map(function (store) { return (<command_1.CommandItem key={store.value} onSelect={function () { return onStoreSelect(store); }} className="text-sm">
                  <lucide_react_1.Store className="mr-2 h-4 w-4"/>
                  {store.label}
                  <lucide_react_1.Check className={(0, utils_1.cn)("ml-auto h-4 w-4", (currentStore === null || currentStore === void 0 ? void 0 : currentStore.value) === store.value
                ? "opacity-100"
                : "opacity-0")}/>
                </command_1.CommandItem>); })}
            </command_1.CommandGroup>
          </command_1.CommandList>
          <command_1.CommandSeparator />
          <command_1.CommandList>
            <command_1.CommandGroup>
              <command_1.CommandItem onSelect={function () {
            setOpen(false);
            storeModal.onOpen();
        }}>
                <lucide_react_1.PlusCircle className="mr-2 h-5 w-5"/>
                Create Store
              </command_1.CommandItem>
            </command_1.CommandGroup>
          </command_1.CommandList>
        </command_1.Command>
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
exports.default = StoreSwitcher;
;
