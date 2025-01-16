import type { ImplicitAnimatable } from "../animations";
import type { Clip, Alignment } from "./properties";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedSizeAttributes extends ValueReferenceHolder<AnimatedSizeAttributes>, ImplicitAnimatable {
    reverseDuration?: number;
    clipBehabior?: keyof typeof Clip;
    alignment?: keyof typeof Alignment;
}