import { AnimatedCrossFadeUiElement } from "../widget_models";

import type { AnimatedCrossFadeAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedCrossFade = (props: BaseProps<AnimatedCrossFadeAttributes>, children?: DuitElement[]): AnimatedCrossFadeUiElement => {
    if (children?.length !== 2) {
        throw new Error("AnimatedCrossFade must have 2 children");
    }

    return new AnimatedCrossFadeUiElement(props.attributes, props.id, children);
}