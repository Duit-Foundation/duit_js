import type { ImplicitAnimatable } from "../animations";
import type { Alignment, FilterQuality } from "./properties";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedRotationAttributes extends ValueReferenceHolder<AnimatedRotationAttributes>, ThemeConsumer, ImplicitAnimatable {
    turns: number;
    alignment?: keyof typeof Alignment;
    filterQuality?: keyof typeof FilterQuality;
}