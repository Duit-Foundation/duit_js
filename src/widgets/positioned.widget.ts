import { PositionedUiElement } from "../widget_models";

import type { PositionedAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Positioned = (props: BaseProps<PositionedAttributes>, child?: DuitElement): PositionedUiElement => {
    return new PositionedUiElement(props.attributes, props.id, props.controlled, child);
}