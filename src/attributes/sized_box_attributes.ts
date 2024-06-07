import { AnimatedPropertyOwner } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface SizedBoxAttributes extends ValueReferenceHolder<SizedBoxAttributes>, AnimatedPropertyOwner {
    width?: number;
    height?: number;
}