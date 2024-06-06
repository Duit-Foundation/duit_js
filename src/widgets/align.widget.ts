import { AlignUiElement } from "../widget_models";

import type { AlignAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Align = (props: BaseProps<AlignAttributes>, child?: DuitElement): AlignUiElement => {
    return new AlignUiElement(props.attributes, props.id, props.controlled, child);
  }