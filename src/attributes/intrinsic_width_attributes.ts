import type { AnimatedPropertyOwner } from "../animations"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ThemeConsumer } from "./theme";

export interface IntrinsicWidthAttributes extends ValueReferenceHolder<IntrinsicWidthAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    stepWidth?: number
    stepHeight?: number
};