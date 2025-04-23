import { AnimatedPositionedUiElement } from "../widget_models";

import type { AnimatedPositionedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedPositioned= (props: BaseProps<AnimatedPositionedAttributes>, child?: DuitElement): AnimatedPositionedUiElement => {
    return new AnimatedPositionedUiElement(props.attributes, props.id, child);
}