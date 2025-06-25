import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DuitElement } from "../lib/element";

export class SliverToBoxAdapterUIElement extends SingleChildLayout {
    type = DuitElementType.sliverToBoxAdapter as const;

    constructor(id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.child = child;
    }
}