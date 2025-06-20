import { AnimatedSlideUiElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";
import type { AnimatedSlideAttributes } from "../attributes";

export const AnimatedSlide = (props: BaseProps<AnimatedSlideAttributes>, child?: DuitElement): AnimatedSlideUiElement => {
    return new AnimatedSlideUiElement(props.attributes, props.id, child);
} 