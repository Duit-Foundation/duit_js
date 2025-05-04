import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { CustomScrollViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class CustomScrollViewUiElement extends MultiChildLayout {
    type = DuitElementType.customScrollView as const;
    attributes: CustomScrollViewAttributes;

    constructor(attrs: CustomScrollViewAttributes, id?: string, controlled?: boolean, children?: DuitElement[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}