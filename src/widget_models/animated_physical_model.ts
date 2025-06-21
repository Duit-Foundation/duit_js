import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedPhysicalModelAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class AnimatedPhysicalModelUiElement extends SingleChildLayout {
    type = DuitElementType.animatedPhysicalModel as const;
    attributes: AnimatedPhysicalModelAttributes;

    constructor(attrs: AnimatedPhysicalModelAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
} 