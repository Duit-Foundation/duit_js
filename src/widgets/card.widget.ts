import { CardUiElement } from "../widget_models";

import type { CardAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";

export const Card = (props: BaseProps<CardAttributes>, child?: DuitElement): CardUiElement => {
    return new CardUiElement(props.attributes, props.id, props.controlled, child);
}