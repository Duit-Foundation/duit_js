import { AnimatedContainerUiElement, AnimatedOpacityUiElement } from "../widget_models";

import type { AnimatedContainerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedContainer = (props: BaseProps<AnimatedContainerAttributes>, child?: DuitElement): AnimatedContainerUiElement => {
    return new AnimatedContainerUiElement(props.attributes, props.id, child);
}