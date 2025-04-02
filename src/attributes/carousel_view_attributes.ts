import { AnimatedPropertyOwner } from "../animations";
import { Axis, Color, EdgeInsets, GridConstructor, ShapeBorder } from "./properties";
import { MaterialStateProperty } from "./properties/material_state";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface CarouselViewAttributes extends ValueReferenceHolder<CarouselViewAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    padding?: EdgeInsets;
    backgroundColor?: Color;
    shape?: ShapeBorder;
    overlayColor?: MaterialStateProperty<Color>;
    elevation?: number;
    shrinkExtent?: number;
    itemExtent?: number;
    scrollDirection?: keyof typeof Axis;
    enableSplash?: boolean;
    reverse?: boolean;
    itemSnapping?: boolean;
    consumeMaxWeight?: boolean;
    flexWeights?: number[];
    constructor: keyof typeof GridConstructor;
}