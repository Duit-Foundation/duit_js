import { AnimatedOpacityUiElement } from "../widget_models";

import type { AnimatedOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedOpacity = (props: BaseProps<AnimatedOpacityAttributes>, child?: DuitElement): AnimatedOpacityUiElement => {
    return new AnimatedOpacityUiElement(props.attributes, props.id, child);
}