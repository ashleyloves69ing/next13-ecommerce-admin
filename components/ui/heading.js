"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
var Heading = function (_a) {
    var title = _a.title, description = _a.description;
    return (<div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>);
};
exports.Heading = Heading;
