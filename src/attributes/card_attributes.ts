import type { AnimatedPropertyOwner } from "../animations";
import type { Clip, Color, EdgeInsets, ShapeBorder } from "./properties";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface CardAttributes extends ValueReferenceHolder<CardAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    color?: Color;
    shadowColor?: Color;
    elevation?: number;
    shape?: ShapeBorder;
    margin?: EdgeInsets;
    clipBehavior?: keyof typeof Clip;
    semanticContainer?: boolean;
    borderOnForeground?: boolean;
}