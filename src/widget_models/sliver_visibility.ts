import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverVisibilityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverVisibilityUiElement extends SingleChildLayout {
    type = DuitElementType.sliverVisibility as const;
    attributes: SliverVisibilityAttributes;

    constructor(attrs: SliverVisibilityAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}