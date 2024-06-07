import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ExpandedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class ExpandedUiElement extends SingleChildLayout {
    type = DuitElementType.expanded as const
    attributes: ExpandedAttributes
    constructor(attrs: ExpandedAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}