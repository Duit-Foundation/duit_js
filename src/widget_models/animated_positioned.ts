import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedPositionedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedPositionedUiElement extends SingleChildLayout {
    type = DuitElementType.animatedPositioned as const;
    attributes: AnimatedPositionedAttributes;


    constructor(attrs: AnimatedPositionedAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}