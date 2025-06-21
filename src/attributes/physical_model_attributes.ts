import type { Color } from "./properties/color"
import type { BoxShape } from "./properties/box_shape"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { AnimatedPropertyOwner, ImplicitAnimatable } from "../animations"
import type { ThemeConsumer } from "./theme";
import type { BorderRadius, Clip } from "./properties";

interface PhysicalModelProps {
    color?: Color
    shadowColor?: Color
    elevation?: number
    borderRadius?: BorderRadius
    shape?: keyof typeof BoxShape
    clipBehavior?: keyof typeof Clip
}

export interface PhysicalModelAttributes extends ValueReferenceHolder<PhysicalModelAttributes>, AnimatedPropertyOwner, ThemeConsumer, PhysicalModelProps { }

export interface AnimatedPhysicalModelAttributes extends ValueReferenceHolder<AnimatedPhysicalModelAttributes>, ImplicitAnimatable, ThemeConsumer, PhysicalModelProps { } 