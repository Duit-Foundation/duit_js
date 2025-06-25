import type { Axis, ScrollPhysics, DragStartBehavior, ScrollViewKeyboardDismissBehavior, Clip } from "./properties";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface CustomScrollViewAttributes extends ValueReferenceHolder<CustomScrollViewAttributes>, ThemeConsumer {
    scrollDirection?: keyof typeof Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: keyof typeof ScrollPhysics;
    shrinkWrap?: boolean;
    itemExtent?: number;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: keyof typeof DragStartBehavior;
    keyboardDismissBehavior?: keyof typeof ScrollViewKeyboardDismissBehavior;
    restorationId?: string;
    clipBehavior?: keyof typeof Clip;
    anchor?: number;
    center?: string;
}