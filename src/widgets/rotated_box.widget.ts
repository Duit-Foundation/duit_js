import { RotatedBoxUiElement } from "../widget_models";

import type { RotatedBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const RotatedBox = (props: BaseProps<RotatedBoxAttributes>, child?: DuitElement): RotatedBoxUiElement => {
    return new RotatedBoxUiElement(props.attributes, props.id, props.controlled, child);
}