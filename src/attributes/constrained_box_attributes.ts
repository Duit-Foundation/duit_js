import type { AnimatedPropertyOwner } from "../animations";
import type { BoxConstraints } from "./properties";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface ConstrainedBoxAttributes extends ValueReferenceHolder<ConstrainedBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    constraints: BoxConstraints;
}