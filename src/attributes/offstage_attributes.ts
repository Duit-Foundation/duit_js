import { AnimatedPropertyOwner } from "../animations";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface OffstageAttributes extends ValueReferenceHolder<OffstageAttributes>, AnimatedPropertyOwner {
    offstage?: boolean
}