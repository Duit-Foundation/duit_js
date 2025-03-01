import type { AnimatedPropertyOwner } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface SizedBoxAttributes extends ValueReferenceHolder<SizedBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    width?: number;
    height?: number;
}