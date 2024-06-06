import { AnimatedPropertyOwner } from "../animations";
import type { Color } from "./properties/color";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface ColoredBoxAttributes extends ValueReferenceHolder<ColoredBoxAttributes>, AnimatedPropertyOwner {
    color: Color;
}