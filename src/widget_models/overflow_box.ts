import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { OverflowBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class OverflowBoxUiElement extends SingleChildLayout {
    type = DuitElementType.overflowBox as const;
    attributes: OverflowBoxAttributes;

    constructor(attrs: OverflowBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}