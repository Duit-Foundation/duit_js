import { FragmentUiElement } from "../widget_models";

export const Fragment = (tag: string, id?: string) =>
    new FragmentUiElement(tag, id);