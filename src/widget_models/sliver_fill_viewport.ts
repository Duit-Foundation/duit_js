import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverFillViewportAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverFillViewportUIElement extends SingleChildLayout {
    type = DuitElementType.sliverFillViewport as const;
    attributes: SliverFillViewportAttributes;

    constructor(attrs: SliverFillViewportAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}