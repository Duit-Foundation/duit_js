import type { AnimatedPropertyOwner } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface RotatedBoxAttributes extends ValueReferenceHolder<RotatedBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    quarterTurns: number; //int value
}