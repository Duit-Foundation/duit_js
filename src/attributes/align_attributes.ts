import { AnimatedPropertyOwner } from "../animations";
import type { Alignment } from "./properties/alignment";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AlignAttributes extends ValueReferenceHolder<AlignAttributes>, AnimatedPropertyOwner  {
    alignment: keyof typeof Alignment;
    widthFactor?: number;
    heightFactor?: number;
}