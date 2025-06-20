import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DuitElement } from "../lib/element";
import type { AnimatedSlideAttributes } from "../attributes/animated_slide_attributes";

export class AnimatedSlideUiElement extends SingleChildLayout {
    type = DuitElementType.animatedSlide as const;
    attributes: AnimatedSlideAttributes;

    constructor(attrs: AnimatedSlideAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
} 