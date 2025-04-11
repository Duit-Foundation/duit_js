import { AnimatedAlignUiElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";
import type { AnimatedAlignAttributes } from "../attributes/animated_align_attributes";

export const AnimatedAlign = (props: BaseProps<AnimatedAlignAttributes>, child?: DuitElement): AnimatedAlignUiElement => {
    return new AnimatedAlignUiElement(props.attributes, props.id, child);
  }