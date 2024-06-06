import { IgnorePoinerUiElement } from "../widget_models";

import type { IgnorePointerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const IgnorePoiner = (props: BaseProps<IgnorePointerAttributes>, child?: DuitElement): IgnorePoinerUiElement => {
    return new IgnorePoinerUiElement(props.attributes, props.id, props.controlled, child);
}