import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverAnimatedOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverAnimatedOpacityUiElement extends SingleChildLayout {
    type = DuitElementType.sliverAnimatedOpacity as const;
    attributes: SliverAnimatedOpacityAttributes;

    constructor(attrs: SliverAnimatedOpacityAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}