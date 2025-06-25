import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { FlexibleSpaceBarAttributes } from "../attributes";

export class FlexibleSpaceBarUiElement extends DuitLeafElement {
    type = DuitElementType.flexibleSpaceBar as const;
    attributes: FlexibleSpaceBarAttributes;

    constructor(attrs: FlexibleSpaceBarAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
} 