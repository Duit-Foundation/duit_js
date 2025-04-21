import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedPaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedPaddingUiElement extends SingleChildLayout {
    type = DuitElementType.animatedPadding as const;
    attributes: AnimatedPaddingAttributes;

    constructor(attrs: AnimatedPaddingAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}