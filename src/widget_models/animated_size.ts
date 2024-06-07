import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedSizeAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class AnimatedSizeUiElement extends SingleChildLayout {
    type = DuitElementType.animatedSize as const;
    attributes: AnimatedSizeAttributes;

    constructor(attrs: AnimatedSizeAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}