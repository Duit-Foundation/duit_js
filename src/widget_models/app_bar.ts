import { AppBarAttributes } from "../attributes";
import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

export class AppBarUiElement extends DuitLeafElement {
    type = DuitElementType.appBar as const;
    attributes: AppBarAttributes;

    constructor(attrs: AppBarAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
}
