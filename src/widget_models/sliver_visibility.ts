import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverVisibilityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverVisibilityUiElement extends MultiChildLayout {
    type = DuitElementType.sliverVisibility as const;
    attributes: SliverVisibilityAttributes;

    constructor(attrs: SliverVisibilityAttributes, id?: string, controlled?: boolean, children?: DuitElement[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}