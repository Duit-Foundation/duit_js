import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { ListViewAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class ListViewUiElement extends MultiChildLayout {
    type = DuitElementType.listView as const;
    attributes: ListViewAttributes;

    constructor(attrs: ListViewAttributes, id?: string, controlled?: boolean, action?: BaseAction, children?: DuitElement[]) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.children = children;
    }
}