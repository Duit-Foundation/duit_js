import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ElevatedButtonAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";

export class ElevatedButtonUiElement extends SingleChildLayout {
    type = DuitElementType.elevatedButton as const;
    attributes: ElevatedButtonAttributes;

    constructor(attrs: ElevatedButtonAttributes, id?: string, action?: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}