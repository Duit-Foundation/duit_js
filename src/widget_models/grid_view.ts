import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { GridViewAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class GridViewUiElement extends MultiChildLayout {
    type = DuitElementType.gridView as const;
    attributes: GridViewAttributes;

    constructor(attrs: GridViewAttributes, id?: string, controlled?: boolean, action?: BaseAction, children?: DuitElement[]) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}