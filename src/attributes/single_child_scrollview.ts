import type { Axis, Clip, DragStartBehavior, ScrollPhysics, ScrollViewKeyboardDismissBehavior, EdgeInsets } from "./properties"
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface SingleChildScrollViewAttributes extends ValueReferenceHolder<SingleChildScrollViewAttributes>, ThemeConsumer {
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