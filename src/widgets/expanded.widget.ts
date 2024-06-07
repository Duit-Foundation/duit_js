import { ExpandedUiElement } from "../widget_models";

import type { ExpandedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Expanded = (props: BaseProps<ExpandedAttributes>, child?: DuitElement): ExpandedUiElement => {
    return new ExpandedUiElement(props.attributes, props.id, props.controlled, child);
}