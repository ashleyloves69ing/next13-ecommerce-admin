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
exports.ThemeToggle = void 0;
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var button_1 = require("@/components/ui/button");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
function ThemeToggle() {
    var setTheme = (0, next_themes_1.useTheme)().setTheme;
    return (<dropdown_menu_1.DropdownMenu>
      <dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline" size="icon">
          <lucide_react_1.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
          <lucide_react_1.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
          <span className="sr-only">Toggle theme</span>
        </button_1.Button>
      </dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent align="end">
        <dropdown_menu_1.DropdownMenuItem onClick={function () { return setTheme("light"); }}>
          Light
        </dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem onClick={function () { return setTheme("dark"); }}>
          Dark
        </dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem onClick={function () { return setTheme("system"); }}>
          System
        </dropdown_menu_1.DropdownMenuItem>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
exports.ThemeToggle = ThemeToggle;
;
