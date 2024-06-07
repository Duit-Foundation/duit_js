import { PaddingUiElement } from "../widget_models";

import type { PaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Padding = (props: BaseProps<PaddingAttributes>, child?: DuitElement): PaddingUiElement => {
    return new PaddingUiElement(props.attributes, props.id, props.controlled, child);
}