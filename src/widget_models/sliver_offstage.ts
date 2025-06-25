import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverOffstageAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverOffstageUiElement extends SingleChildLayout {
    type = DuitElementType.sliverOffstage as const;
    attributes: SliverOffstageAttributes;

    constructor(attrs: SliverOffstageAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
} 