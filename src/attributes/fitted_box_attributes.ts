import type { AnimatedPropertyOwner } from "../animations";
import type { BoxFit, Clip } from "./properties";
import type { Alignment } from "./properties/alignment";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface FittedBoxAttributes extends ValueReferenceHolder<FittedBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    fit?: keyof typeof BoxFit;
    clipBehavior?: keyof typeof Clip;
    alignment?: keyof typeof Alignment;
}