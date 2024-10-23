import { SubtreeUiElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Subtree = (props: BaseProps<DuitElement>, child?: DuitElement): SubtreeUiElement => {
    return new SubtreeUiElement(props.attributes, props.id, child);
}