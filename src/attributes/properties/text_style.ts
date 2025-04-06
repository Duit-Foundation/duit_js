import type { Color } from "./color";
import type { FontWeight } from "./font_weight";
import type { TextDecoration } from "./text_decoration";
import type { TextDecorationStyle } from "./text_decoration_style";

export interface TextStyle {
    color?: Color;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    letterSpacing?: number;
    wordSpacing?: number;
    height?: number;
    decoration?: TextDecoration;
    decorationStyle?: TextDecorationStyle;
    decorationColor?: Color;
    decorationThickness?: number;
}