import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverAppBarAttributes } from "../attributes";

export class SliverAppBarUiElement extends DuitLeafElement {
    type = DuitElementType.sliverAppBar as const;
    attributes: SliverAppBarAttributes;

    constructor(attrs: SliverAppBarAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
} 