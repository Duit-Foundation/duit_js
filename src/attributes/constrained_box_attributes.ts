import type { AnimatedPropertyOwner } from "../animations";
import type { BoxConstraints } from "./properties";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface ConstrainedBoxAttributes extends ValueReferenceHolder<ConstrainedBoxAttributes>, AnimatedPropertyOwner {
    constraints: BoxConstraints;
}