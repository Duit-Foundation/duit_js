import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverSafeAreaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SliverSafeAreaUiElement extends SingleChildLayout {
    type = DuitElementType.sliverSafeArea as const;
    attributes: SliverSafeAreaAttributes;

    constructor(attrs: SliverSafeAreaAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
} 