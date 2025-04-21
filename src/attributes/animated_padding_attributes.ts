import type { ImplicitAnimatable } from "../animations";
import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";


export interface AnimatedPaddingAttributes extends ValueReferenceHolder<AnimatedPaddingAttributes>, ThemeConsumer, ImplicitAnimatable {
    padding: EdgeInsets,
}