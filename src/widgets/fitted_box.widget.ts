import { FittedBoxUiElement } from "../widget_models";

import type { FittedBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const FittedBox = (props: BaseProps<FittedBoxAttributes>, child?: DuitElement): FittedBoxUiElement => {
    return new FittedBoxUiElement(props.attributes, props.id, props.controlled, child);
}