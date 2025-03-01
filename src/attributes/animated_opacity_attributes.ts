import type { ImplicitAnimatable } from "../animations";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedOpacityAttributes extends ValueReferenceHolder<AnimatedOpacityAttributes>, ImplicitAnimatable, ThemeConsumer {
    opacity: number
}