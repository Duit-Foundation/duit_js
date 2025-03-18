import type { ComponentUiElement } from "../widget_models";
import type { MergeStrategy } from "./properties";

export interface Builder {
    childObjects: ComponentUiElement[];
    mergeStrategy?: keyof typeof MergeStrategy;
    scrollEndReachedThreshold?: number;
}