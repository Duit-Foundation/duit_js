import { OverflowBoxUiElement } from "../widget_models/overflow_box";

import type { OverflowBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const OverflowBox = (props: BaseProps<OverflowBoxAttributes>, child?: DuitElement): OverflowBoxUiElement => {
    return new OverflowBoxUiElement(props.attributes, props.id, props.controlled, child);
}