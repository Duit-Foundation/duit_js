import { AnimatedPropertyOwner } from "../animations"
import { ValueReferenceHolder } from "./value_reference_holder"

export interface IntrinsicWidthAttributes extends ValueReferenceHolder<IntrinsicWidthAttributes>, AnimatedPropertyOwner{
    stepWidth?: number
    stepHeight?: number
};