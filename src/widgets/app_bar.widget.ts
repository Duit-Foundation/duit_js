import { AppBarAttributes } from "../attributes";
import { AppBarUiElement } from "../widget_models/app_bar";

export const AppBar = (attrs: AppBarAttributes, id?: string): AppBarUiElement => {
    if (attrs.bottomOpacity !== undefined && (attrs.bottomOpacity < 0 || attrs.bottomOpacity > 1)) {
        throw new Error("bottomOpacity must be between 0 and 1");
    }

    if (attrs.toolbarOpacity !== undefined && (attrs.toolbarOpacity < 0 || attrs.toolbarOpacity > 1)) {
        throw new Error("toolbarOpacity must be between 0 and 1");
    }

    return new AppBarUiElement(attrs, id);
}
