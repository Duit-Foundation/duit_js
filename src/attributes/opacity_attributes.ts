import type { AnimatedPropertyOwner } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface OpacityAttributes extends ValueReferenceHolder<OpacityAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    opacity: number
}