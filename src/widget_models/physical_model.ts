import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PhysicalModelAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class PhysicalModelUiElement extends SingleChildLayout {
    type = DuitElementType.physicalModel as const;
    attributes: PhysicalModelAttributes;

    constructor(attrs: PhysicalModelAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
} 