import { AnimatedBuilderUiElement } from "../widget_models";

import type { AnimatedBuilderAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedBuilder = (props: BaseProps<AnimatedBuilderAttributes>, child?: DuitElement): AnimatedBuilderUiElement => {
    return new AnimatedBuilderUiElement(props.attributes, props.id, child);
}