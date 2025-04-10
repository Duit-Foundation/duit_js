import type { AnimatedPropertyOwner } from "../animations";
import type { OverflowBoxFit } from "./properties";
import type { Alignment } from "./properties/alignment";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface OverflowBoxAttributes extends ValueReferenceHolder<OverflowBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    alignment?: keyof typeof Alignment;
    fit?: keyof typeof OverflowBoxFit;
}