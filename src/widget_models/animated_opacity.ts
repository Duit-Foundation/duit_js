import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedOpacityUiElement extends SingleChildLayout {
    type = DuitElementType.animatedOpacity as const;
    attributes: AnimatedOpacityAttributes;

    constructor(attrs: AnimatedOpacityAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}