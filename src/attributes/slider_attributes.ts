import type { BaseAction } from "../lib/action"
import type { Color, SliderInteraction } from "./properties";
import type { MaterialStateProperty } from "./properties/material_state";
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ThemeConsumer } from "./theme";

export interface SliderAttributes extends ValueReferenceHolder<SliderAttributes>, ThemeConsumer {
    value: number;
    min?: number;
    max?: number;
    divisions?: number;
    secondaryTrackValue?: number;
    onChanged?: BaseAction;
    onChangeStart?: BaseAction;
    onChangeEnd?: BaseAction;
    activeColor?: Color;
    inactiveColor?: Color;
    secondaryActiveColor?: Color;
    thumbColor?: Color;
    overlayColor?: MaterialStateProperty<Color>;
    autofocus?: boolean;
    label?: string;
    allowedInteraction?: keyof typeof SliderInteraction;
}