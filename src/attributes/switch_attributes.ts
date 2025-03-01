import type { Color, MaterialTapTargetSize } from "./properties";
import type { MaterialStateProperty } from "./properties/material_state";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface SwichAttributes extends ValueReferenceHolder<SwichAttributes>, ThemeConsumer {
    value: boolean;
    activeColor?: Color;
    activeTrackColor?: Color;
    inactiveTrackColor?: Color;
    hoverColor?: Color;
    focusColor?: Color;
    overlayColor?: MaterialStateProperty<Color>;
    trackColor?: MaterialStateProperty<Color>;
    thumbColor?: MaterialStateProperty<Color>;
    trackOutlineColor?: MaterialStateProperty<Color>;
    trackOutlineWidth?: MaterialStateProperty<number>;
    splashRadius?: number;
    materialTapTargetSize?: keyof typeof MaterialTapTargetSize;
    autofocus?: boolean;
}