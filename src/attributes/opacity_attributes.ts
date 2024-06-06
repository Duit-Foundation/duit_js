import { AnimatedPropertyOwner } from "../animations";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface OpacityAttributes extends ValueReferenceHolder<OpacityAttributes>, AnimatedPropertyOwner {
    opacity: number
}