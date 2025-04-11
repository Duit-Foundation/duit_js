import { ImplicitAnimatable } from "../animations";
import { Alignment } from "./properties";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface AnimatedAlignAttributes extends ValueReferenceHolder<AnimatedAlignAttributes>, ImplicitAnimatable, ThemeConsumer {
    alignment: keyof typeof Alignment;
    widthFactor?: number;
    heightFactor?: number;
}