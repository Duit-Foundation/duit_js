import type { AnimatedPropertyOwner } from "../animations";
import type { Alignment } from "./properties/alignment";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AlignAttributes extends ValueReferenceHolder<AlignAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    alignment: keyof typeof Alignment;
    widthFactor?: number;
    heightFactor?: number;
}