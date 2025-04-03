import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedContainerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedContainerUiElement extends SingleChildLayout {
    type = DuitElementType.animatedContainer as const;
    attributes: AnimatedContainerAttributes;

    constructor(attrs: AnimatedContainerAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}