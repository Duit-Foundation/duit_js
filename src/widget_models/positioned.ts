import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PositionedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class PositionedUiElement extends SingleChildLayout {
    type = DuitElementType.positioned as const;
    attributes: PositionedAttributes;

    constructor(attrs: PositionedAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}