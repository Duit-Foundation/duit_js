import type { Axis, Clip, DragStartBehavior, ScrollPhysics, ScrollViewKeyboardDismissBehavior, EdgeInsets } from "./properties"
import { ValueReferenceHolder } from "./value_reference_holder";

export interface SingleChildScrollViewAttributes extends ValueReferenceHolder<SingleChildScrollViewAttributes> {
    scrollDirection?: keyof typeof Axis;
    reverse?: boolean;
    padding?: EdgeInsets;
    primary?: boolean;
    physics?: keyof typeof ScrollPhysics;
    clipBehavior?: keyof typeof Clip;
    restorationId?: string;
    dragStartBehavior?: keyof typeof DragStartBehavior;
    keyboardDismissBehavior?: keyof typeof ScrollViewKeyboardDismissBehavior;
}