import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { SliverGridAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class SliverGridUiElement extends MultiChildLayout {
    type = DuitElementType.sliverGrid as const;
    attributes: SliverGridAttributes;

    constructor(attrs: SliverGridAttributes, id?: string, controlled?: boolean, action?: BaseAction, children?: DuitElement[]) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.children = children;
    }
} 