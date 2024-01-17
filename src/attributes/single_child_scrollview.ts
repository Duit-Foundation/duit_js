import { EdgeInsets } from "../utils/insets"
import { Axis, Clip, DragStartBehavior, ScrollPhysics, ScrollViewKeyboardDismissBehavior } from "./properties"

export interface SingleChildScrollViewAttributes {
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