import { ComponentUiElement } from "../widget_models";
import { Axis, EdgeInsets, DragStartBehavior, ScrollViewKeyboardDismissBehavior, Clip, MergeStrategy, ScrollPhysics, ListKind } from "./properties";

export interface ListView {
    type: ListKind;
    scrollDirection?: keyof typeof Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: keyof typeof ScrollPhysics;
    shrinkWrap?: boolean;
    padding?: EdgeInsets;
    itemExtent?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: keyof typeof DragStartBehavior;
    keyboardDismissBehavior?: keyof typeof ScrollViewKeyboardDismissBehavior;
    restorationId?: string;
    clipBehavior?: keyof typeof Clip;
    anchor?: number;
}

export interface ListViewBuilderAttributes extends ListView {
    childObjects: ComponentUiElement[];
    mergeStrategy?: keyof typeof MergeStrategy;
    scrollEndReachedThreshold?: number;
}

export interface ListViewSeparatedAttributes extends ListViewBuilderAttributes {
    separator: ComponentUiElement;
}

export type ListViewAttributes = ListViewBuilderAttributes | ListViewSeparatedAttributes | ListView;