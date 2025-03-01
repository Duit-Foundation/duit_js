import type { ImplicitAnimatable } from "../animations";
import type { Clip, Alignment } from "./properties";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedSizeAttributes extends ValueReferenceHolder<AnimatedSizeAttributes>, ImplicitAnimatable, ThemeConsumer {
    reverseDuration?: number;
    clipBehabior?: keyof typeof Clip;
    alignment?: keyof typeof Alignment;
}