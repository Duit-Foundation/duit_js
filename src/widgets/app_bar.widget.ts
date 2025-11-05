import { AppBarAttributes } from "../attributes";
import { DuitElement } from "../lib/element";
import { AppBarUiElement } from "../widget_models/app_bar";
import { ListChild } from "../widget_models/child";

export const AppBar = (
    attrs: AppBarAttributes,
    id?: string,
    controlled?: boolean,
    title?: DuitElement,
    leading?: DuitElement,
    flexibleSpace?: DuitElement,
    bottom?: DuitElement,
    actions?: DuitElement[]
): AppBarUiElement => {
    if (attrs.bottomOpacity !== undefined && (attrs.bottomOpacity < 0 || attrs.bottomOpacity > 1)) {
        throw new Error("bottomOpacity must be between 0 and 1");
    }

    if (attrs.toolbarOpacity !== undefined && (attrs.toolbarOpacity < 0 || attrs.toolbarOpacity > 1)) {
        throw new Error("toolbarOpacity must be between 0 and 1");
    }

    const children: ListChild[] = [title, leading, flexibleSpace, bottom];

    if (actions) {
        children.push(...actions);
    }

    return new AppBarUiElement(attrs, id, controlled, children);
}
