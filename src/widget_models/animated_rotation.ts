import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedRotationAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedRotationUiElement extends SingleChildLayout {
    type = DuitElementType.animatedRotation as const;
    attributes: AnimatedRotationAttributes;

    constructor(attrs: AnimatedRotationAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}