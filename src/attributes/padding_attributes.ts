import type { AnimatedPropertyOwner } from "../animations";
import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface PaddingAttributes extends ValueReferenceHolder<PaddingAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    padding: EdgeInsets,
}