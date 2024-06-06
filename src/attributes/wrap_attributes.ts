import { AnimatedPropertyOwner } from "../animations";
import type { Axis } from "./properties/axis";
import type { Clip } from "./properties/clip";
import type { TextDirection } from "./properties/text_direction";
import type { VerticalDirection } from "./properties/vertical_direction";
import type { WrapAlignment, WrapCrossAlignment } from "./properties/wrap_alignment";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface WrapAttributes extends ValueReferenceHolder<WrapAttributes>, AnimatedPropertyOwner {
    clipBehavior?: keyof typeof Clip;
    textDirection?: keyof typeof TextDirection;
    verticalDirection?: keyof typeof VerticalDirection;
    spacing?: number;
    runSpacing?: number;
    alignment?: keyof typeof WrapAlignment;
    runAlignment?: keyof typeof WrapAlignment;
    crossAxisAlignment?: keyof typeof WrapCrossAlignment;
    direction?: keyof typeof Axis;
}