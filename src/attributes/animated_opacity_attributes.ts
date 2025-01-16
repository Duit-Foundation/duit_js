import type { ImplicitAnimatable } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedOpacityAttributes extends ValueReferenceHolder<AnimatedOpacityAttributes>, ImplicitAnimatable {
    opacity: number
}