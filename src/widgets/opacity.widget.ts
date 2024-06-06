import { OpacityUiElement } from "../widget_models";

import type { OpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Opacity = (props: BaseProps<OpacityAttributes>, child?: DuitElement): OpacityUiElement => {
    return new OpacityUiElement(props.attributes, props.id, props.controlled, child);
}