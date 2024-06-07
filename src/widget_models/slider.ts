import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { SliderAttributes } from "../attributes/slider_attributes";

export class SliderUiElement extends DuitLeafElement {
    type = DuitElementType.slider as const;
    attributes: SliderAttributes;

    constructor(attrs: SliderAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
}