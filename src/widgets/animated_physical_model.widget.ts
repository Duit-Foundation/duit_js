import { AnimatedPhysicalModelUiElement } from "../widget_models";

import type { AnimatedPhysicalModelAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedPhysicalModel = (props: BaseProps<AnimatedPhysicalModelAttributes>, child?: DuitElement): AnimatedPhysicalModelUiElement => {
    return new AnimatedPhysicalModelUiElement(props.attributes, props.id, child);
} 