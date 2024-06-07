import { SizedBoxUiElement } from "../widget_models";

import type { SizedBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SizedBox = (props: BaseProps<SizedBoxAttributes>, child?: DuitElement): SizedBoxUiElement => {
    return new SizedBoxUiElement(props.attributes, props.id, props.controlled, child);
}