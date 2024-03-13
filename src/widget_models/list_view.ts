import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { PropsWithAction } from "./props";
import { ListViewAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class ListViewUiElement extends MultiChildLayout {
    type = DuitElementType.listView as const;
    attributes: ListViewAttributes;

    constructor(attrs: ListViewAttributes, id?: string, controlled?: boolean, action?: BaseAction) {
        super(id, action, controlled);
        this.attributes = attrs;
    }
}

export const ListViewWidget = (props: PropsWithAction<ListViewAttributes>): ListViewUiElement => {
    return new ListViewUiElement(props.attributes, props.id, props.controlled, props.action);
}