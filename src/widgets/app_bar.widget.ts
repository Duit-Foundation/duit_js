import { AppBarAttributes } from "../attributes";
import { AppBarUiElement } from "../widget_models/app_bar";

export const AppBar = (attrs: AppBarAttributes, id?: string): AppBarUiElement => {
    return new AppBarUiElement(attrs, id);
}
