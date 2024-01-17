import type { Color } from "./properties/color";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface ColoredBoxAttributes extends ValueReferenceHolder<ColoredBoxAttributes> {
    color: Color;
}