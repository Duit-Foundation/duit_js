import type { AnimatedPropertyOwner } from "../animations";
import type { Color } from "./properties/color";
import type { StrutStyle } from "./properties/strut_style";
import type { TextAlign } from "./properties/text_align";
import type { TextDirection } from "./properties/text_direction";
import type { TextHeightBehavior } from "./properties/text_height_behavior";
import type { TextOverflow } from "./properties/text_overflow";
import type { TextScaler } from "./properties/text_scaler";
import type { TextSpan } from "./properties/text_span";
import type { TextStyle } from "./properties/text_style";
import type { TextWidghtBasis } from "./properties/text_wigth_basis";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface RichTextAttributes extends ValueReferenceHolder<RichTextAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    textSpan?: TextSpan;
    style?: TextStyle;
    textAlign?: keyof typeof TextAlign;
    textDirection?: keyof typeof TextDirection;
    softWrap?: boolean;
    textOverflow?: keyof typeof TextOverflow;
    maxLines?: number;
    semanticsLabel?: string;
    selectionColor?: Color;
    textScaler?: TextScaler;
    strutStyle?: StrutStyle;
    textWidthBasis?: TextWidghtBasis;
    TextHeightBehavior?: TextHeightBehavior;
}