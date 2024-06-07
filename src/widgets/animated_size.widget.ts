import { AnimatedSizeUiElement } from "../widget_models";

import type { AnimatedSizeAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AnimatedSize = (props: BaseProps<AnimatedSizeAttributes>, child?: DuitElement): AnimatedSizeUiElement => {
    return new AnimatedSizeUiElement(props.attributes, props.id, props.controlled, child);
  }