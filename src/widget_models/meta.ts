import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { MetaAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class MetaUiElement extends SingleChildLayout {
    type = DuitElementType.meta as const;
    attributes: MetaAttributes;

    constructor(attrs: MetaAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
}

export const Meta = (props: BaseProps<MetaAttributes>): MetaUiElement => {
    return new MetaUiElement(props.attributes, props.id);
}