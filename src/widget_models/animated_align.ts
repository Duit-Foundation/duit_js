import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DuitElement } from "../lib/element";
import type { AnimatedAlignAttributes } from "../attributes/animated_align_attributes";


export class AnimatedAlignUiElement extends SingleChildLayout {
    type = DuitElementType.animatedAlign as const;
    attributes: AnimatedAlignAttributes;

    constructor(attrs: AnimatedAlignAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}