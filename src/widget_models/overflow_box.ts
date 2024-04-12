import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { OverflowBoxAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class OverflowBoxUiElement extends SingleChildLayout {
    type = DuitElementType.overflowBox as const;
    attributes: OverflowBoxAttributes;

    constructor(attrs: OverflowBoxAttributes, id?: string, controlled?: boolean) {
        super(id, null, controlled);
        this.attributes = attrs;
    }
}

export const OverflowBox = (props: BaseProps<OverflowBoxAttributes>): OverflowBoxUiElement => {
    return new OverflowBoxUiElement(props.attributes, props.id, props.controlled);
}