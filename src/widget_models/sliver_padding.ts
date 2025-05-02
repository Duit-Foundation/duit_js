import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverPaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverPaddingUiElement extends SingleChildLayout {
    type = DuitElementType.sliverPadding as const;
    attributes: SliverPaddingAttributes;

    constructor(attrs: SliverPaddingAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}