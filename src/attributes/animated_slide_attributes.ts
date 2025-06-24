import { ImplicitAnimatable } from "../animations";
import { Offset } from "./properties/offset";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedSlideAttributes extends ValueReferenceHolder<AnimatedSlideAttributes>, ImplicitAnimatable, ThemeConsumer {
    offset: Offset;
} 