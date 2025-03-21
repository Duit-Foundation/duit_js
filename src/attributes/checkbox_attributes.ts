import type { Color } from "./properties/color";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { BorderSide } from "./properties/border";
import type { MaterialStateProperty } from "./properties/material_state";
import type { VisualDensity } from "./properties/visual_density";
import type { ThemeConsumer } from "./theme";

export interface CheckboxAttributes extends ValueReferenceHolder<CheckboxAttributes>, ThemeConsumer {
    value: boolean;
    autofocus?: boolean;
    isError?: boolean;
    tristate?: boolean;
    checkColor?: Color;
    splashColor?: Color;
    activeColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    fillColor?: MaterialStateProperty<Color>;
    overlayColor?: MaterialStateProperty<Color>;
    side?: BorderSide;
    splashRadius?: number;
    semanticLabel?: string;
    visualDensity?: VisualDensity;
}