import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class PaddingUiElement extends SingleChildLayout {
    type = DuitElementType.padding as const;
    attributes: PaddingAttributes;

    constructor(attrs: PaddingAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}