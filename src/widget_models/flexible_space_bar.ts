import { ListChild, MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { FlexibleSpaceBarAttributes } from "../attributes";

export class FlexibleSpaceBarUiElement extends MultiChildLayout {
    type = DuitElementType.flexibleSpaceBar as const;
    attributes: FlexibleSpaceBarAttributes;

    constructor(attrs: FlexibleSpaceBarAttributes, id?: string, controlled?: boolean, children?: ListChild[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
} 