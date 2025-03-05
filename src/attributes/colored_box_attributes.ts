import type { AnimatedPropertyOwner } from "../animations";
import type { Color } from "./properties/color";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface ColoredBoxAttributes extends ValueReferenceHolder<ColoredBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    color: Color;
}