import { SliderUiElement } from "../widget_models";

import type { SliderAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const Slider = (props: BaseProps<SliderAttributes>): SliderUiElement => {
    return new SliderUiElement(props.attributes, props.id);
}