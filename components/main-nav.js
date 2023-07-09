"use strict";
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainNav = void 0;
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
function MainNav(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var pathname = (0, navigation_1.usePathname)();
    var params = (0, navigation_1.useParams)();
    var routes = [
        {
            href: "/".concat(params.storeId),
            label: 'Overview',
            active: pathname === "/".concat(params.storeId),
        },
        {
            href: "/".concat(params.storeId, "/billboards"),
            label: 'Billboards',
            active: pathname === "/".concat(params.storeId, "/billboards"),
        },
        {
            href: "/".concat(params.storeId, "/categories"),
            label: 'Categories',
            active: pathname === "/".concat(params.storeId, "/categories"),
        },
        {
            href: "/".concat(params.storeId, "/sizes"),
            label: 'Sizes',
            active: pathname === "/".concat(params.storeId, "/sizes"),
        },
        {
            href: "/".concat(params.storeId, "/colors"),
            label: 'Colors',
            active: pathname === "/".concat(params.storeId, "/colors"),
        },
        {
            href: "/".concat(params.storeId, "/products"),
            label: 'Products',
            active: pathname === "/".concat(params.storeId, "/products"),
        },
        {
            href: "/".concat(params.storeId, "/orders"),
            label: 'Orders',
            active: pathname === "/".concat(params.storeId, "/orders"),
        },
        {
            href: "/".concat(params.storeId, "/settings"),
            label: 'Settings',
            active: pathname === "/".concat(params.storeId, "/settings"),
        },
    ];
    return (<nav className={(0, utils_1.cn)("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {routes.map(function (route) { return (<link_1.default key={route.href} href={route.href} className={(0, utils_1.cn)('text-sm font-medium transition-colors hover:text-primary', route.active ? 'text-black dark:text-white' : 'text-muted-foreground')}>
          {route.label}
      </link_1.default>); })}
    </nav>);
}
exports.MainNav = MainNav;
;
