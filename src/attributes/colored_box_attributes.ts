import type { Color } from "../utils/color";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface ColoredBoxAttributes extends ValueReferenceHolder<ColoredBoxAttributes> {
    color: Color;
}