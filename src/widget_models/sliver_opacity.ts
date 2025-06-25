import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverOpacityUiElement extends SingleChildLayout {
    type = DuitElementType.sliverOpacity as const;
    attributes: SliverOpacityAttributes;

    constructor(attrs: SliverOpacityAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}