import type { ComponentUiElement } from "../widget_models";

export interface Builder {
    childObjects: ComponentUiElement[];
    scrollEndReachedThreshold?: number;
}