import { AnimatedPaddingUiElement } from "../widget_models";

import type { AnimatedPaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedPadding = (props: BaseProps<AnimatedPaddingAttributes>, child?: DuitElement): AnimatedPaddingUiElement => {
    return new AnimatedPaddingUiElement(props.attributes, props.id, child);
}