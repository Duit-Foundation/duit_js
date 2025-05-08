import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverFillRemaningAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverFillRemainingUiElement extends SingleChildLayout {
    type = DuitElementType.sliverFillRemaining as const;
    attributes: SliverFillRemaningAttributes;

    constructor(attrs: SliverFillRemaningAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}