import { ListChild, MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliverAppBarAttributes } from "../attributes";

export class SliverAppBarUiElement extends MultiChildLayout {
    type = DuitElementType.sliverAppBar as const;
    attributes: SliverAppBarAttributes;

    constructor(attrs: SliverAppBarAttributes, id?: string, controlled?: boolean, children?: ListChild[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
} 