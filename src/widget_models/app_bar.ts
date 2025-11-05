import { AppBarAttributes } from "../attributes";
import DuitElementType from "../lib/element_type";
import { ListChild, MultiChildLayout } from "./child";

export class AppBarUiElement extends MultiChildLayout {
    type = DuitElementType.appBar as const;
    attributes: AppBarAttributes;

    constructor(attrs: AppBarAttributes, id?: string, controlled?: boolean, children?: ListChild[]) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}
