import type { AnimatedPropertyOwner } from "../animations"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ThemeConsumer } from "./theme";

export interface PositionedAttributes extends ValueReferenceHolder<PositionedAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    top?: number
    bottom?: number
    left?: number
    right?: number
}