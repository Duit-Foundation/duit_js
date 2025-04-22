import type { AnimatedPropertyOwner, ImplicitAnimatable } from "../animations"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ThemeConsumer } from "./theme";

interface PositionedProps {
    top?: number
    bottom?: number
    left?: number
    right?: number
}

export interface PositionedAttributes extends ValueReferenceHolder<PositionedAttributes>, AnimatedPropertyOwner, ThemeConsumer, PositionedProps { }

export interface AnimatedPositionedAttributes extends ValueReferenceHolder<PositionedAttributes>, ImplicitAnimatable, ThemeConsumer, PositionedProps { }