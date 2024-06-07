import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { MetaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class MetaUiElement extends SingleChildLayout {
    type = DuitElementType.meta as const;
    attributes: MetaAttributes;

    constructor(attrs: MetaAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}