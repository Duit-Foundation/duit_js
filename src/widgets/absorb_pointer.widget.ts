import { AbsorbPointerUiElement } from "../widget_models";

import type { AbsorbPointerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const AbsorbPointer = (props: BaseProps<AbsorbPointerAttributes>, child?: DuitElement) : AbsorbPointerUiElement => {
    return new AbsorbPointerUiElement(props.attributes, child, props.controlled, props.id);
}