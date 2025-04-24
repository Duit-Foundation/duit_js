import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedScaleAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedScaleUiElement extends SingleChildLayout {
    type = DuitElementType.animatedScale as const;
    attributes: AnimatedScaleAttributes;

    constructor(attrs: AnimatedScaleAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}