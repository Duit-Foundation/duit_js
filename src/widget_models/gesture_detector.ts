import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { GestureDetectorAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class GestureDetectorUiElement extends SingleChildLayout {
    type = DuitElementType.gestureDetector as const
    attributes: GestureDetectorAttributes
    constructor(attrs: GestureDetectorAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}
