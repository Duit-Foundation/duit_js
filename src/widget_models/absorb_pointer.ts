import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AbsorbPointerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class AbsorbPointerUiElement extends SingleChildLayout {
    type = DuitElementType.absorbPointer as const;
    attributes: AbsorbPointerAttributes;

    constructor(attrs: AbsorbPointerAttributes, child?: DuitElement, controlled?: boolean, id?: string) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}