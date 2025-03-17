import type { Builder } from "./builder";
import type { Axis, Clip, DragStartBehavior, EdgeInsets, GridConstructor, ScrollPhysics, ScrollViewKeyboardDismissBehavior } from "./properties/index";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

interface GridViewBaseAttributes extends ValueReferenceHolder<GridViewBaseAttributes>, ThemeConsumer {
    constructor: keyof typeof GridConstructor;
}

interface DefaultGridAttributes {
    scrollDirection?: keyof typeof Axis;
    reverse?: boolean;
    primary?: boolean;
    shrinkWrap?: boolean;
    padding?: EdgeInsets;
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

interface GridViewCommonAttributes extends DefaultGridAttributes {
    constructor: GridConstructor.common;
    sliverGridDelegateKey: string;
    sliverGridDelegateOptions?: Record<string, any>;

}

interface GridViewCountAttributes extends DefaultGridAttributes {
    constructor: GridConstructor.count;
    crossAxisCount: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
}

interface GridViewBuilderAttributes extends DefaultGridAttributes, Builder {
    constructor: GridConstructor.builder;
    sliverGridDelegateKey: string;
    sliverGridDelegateOptions?: Record<string, any>;
}

interface GridViewExtentAttributes extends DefaultGridAttributes {
    constructor: GridConstructor.extent;
    maxCrossAxisExtent: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
}

export type GridViewAttributes = GridViewCommonAttributes | GridViewCountAttributes | GridViewBuilderAttributes | GridViewExtentAttributes;