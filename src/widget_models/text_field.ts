import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { TextFieldAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";

export class TextFieldUiElement extends DuitLeafElement {
    type = DuitElementType.textField as const;
    attributes: TextFieldAttributes;

    constructor(attrs: TextFieldAttributes, id?: string, action?: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}