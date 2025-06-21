import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { SliverListAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class SliverListUiElement extends MultiChildLayout {
    type = DuitElementType.sliverList as const;
    attributes: SliverListAttributes;

    constructor(attrs: SliverListAttributes, id?: string, controlled?: boolean, action?: BaseAction, children?: DuitElement[]) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.children = children;
    }
} 