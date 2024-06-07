import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { StackAttributes } from "../attributes/stack_attributes";
import type { BaseProps } from "./props";
import type { DuitElement } from "../lib/element";

export class StackUiElement extends MultiChildLayout {
    type = DuitElementType.stack as const;
    attributes: StackAttributes;

    constructor(attrs: StackAttributes, id?: string, controlled?: boolean, children?: DuitElement[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}