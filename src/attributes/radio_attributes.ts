import type { Color, MaterialTapTargetSize} from "./properties";
import type { MaterialStateProperty } from "./properties/material_state";
import type { VisualDensity } from "./properties/visual_density";

type PrimitiveValue = string | number | boolean;
export interface RadioAttributes {
    value: PrimitiveValue;
    toggleable?: boolean;
    autofocus?: boolean;
    activeColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    fillColor?: MaterialStateProperty<Color>;
    overlayColor?: MaterialStateProperty<Color>;
    splashRadius?: number;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: keyof typeof MaterialTapTargetSize;
}

export interface RadioGroupContextAttributes {
    groupValue: PrimitiveValue;
}