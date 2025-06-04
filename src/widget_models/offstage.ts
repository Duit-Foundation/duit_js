import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { OffstageAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class OffstageUiElement extends SingleChildLayout {
    type = DuitElementType.offstage as const;
    attributes: OffstageAttributes;

    constructor(attrs: OffstageAttributes, child?: DuitElement, controlled?: boolean, id?: string) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}