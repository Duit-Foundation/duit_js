import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverIgnorePointerAttributes } from "../attributes/sliver_ignore_pointer_attributes";
import type { DuitElement } from "../lib/element";

export class SliverIgnorePointerUiElement extends SingleChildLayout {
    type = DuitElementType.sliverIgnorePointer as const;
    attributes: SliverIgnorePointerAttributes;

    constructor(attrs: SliverIgnorePointerAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
} 