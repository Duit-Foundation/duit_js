import { ConstrainedBoxUiElement } from "../widget_models";
import { ConstrainedBoxAttributes } from "../attributes/constrained_box_attributes";

import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const ConstrainedBox = (props: BaseProps<ConstrainedBoxAttributes>, child?: DuitElement): ConstrainedBoxUiElement => {
    return new ConstrainedBoxUiElement(props.attributes, props.id, props.controlled, child);
}