import { ComponentUiElement } from "../widget_models";
import { Builder } from "./builder";
import type { Axis, Clip, DragStartBehavior, EdgeInsets, GridConstructor, ScrollPhysics, ScrollViewKeyboardDismissBehavior } from "./properties/index";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

interface SliverGridCommon {
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: keyof typeof DragStartBehavior;
    clipBehavior?: keyof typeof Clip;
    keyboardDismissBehavior?: keyof typeof ScrollViewKeyboardDismissBehavior;
    restorationId?: string;
    physics?: keyof typeof ScrollPhysics;
}

interface SliverGridCommonAttributes extends SliverGridCommon, ValueReferenceHolder<SliverGridCommonAttributes>, ThemeConsumer {
    constructor: GridConstructor.common;
    sliverGridDelegateKey: string;
    sliverGridDelegateOptions?: Record<string, any>;
}

interface SliverGridCountAttributes extends SliverGridCommon, ValueReferenceHolder<SliverGridCountAttributes>, ThemeConsumer {
    constructor: GridConstructor.count;
    crossAxisCount: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
}

interface SliverGridBuilderAttributes extends SliverGridCommon, Builder, ValueReferenceHolder<SliverGridBuilderAttributes>, ThemeConsumer {
    constructor: GridConstructor.builder;
    sliverGridDelegateKey: string;
    sliverGridDelegateOptions?: Record<string, any>;
}

interface SliverGridExtentAttributes extends SliverGridCommon, ValueReferenceHolder<SliverGridExtentAttributes>, ThemeConsumer {
    constructor: GridConstructor.extent;
    maxCrossAxisExtent: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
}

export type SliverGridAttributes = SliverGridCommonAttributes | SliverGridCountAttributes | SliverGridBuilderAttributes | SliverGridExtentAttributes; 