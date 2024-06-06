import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

export class ComponentUiElement extends DuitLeafElement {
    type = DuitElementType.component as const
    data: Object;
    tag: string;

    constructor(data: Object, tag: string, id?: string) {
        super(id, null, true);
        this.data = data;
        this.tag = tag;
    }
}