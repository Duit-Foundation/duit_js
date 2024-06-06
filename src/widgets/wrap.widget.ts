import { WrapUiElement } from "../widget_models";

import type { WrapAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Wrap = (props: BaseProps<WrapAttributes>, children?: DuitElement[]): WrapUiElement => {
    return new WrapUiElement(props.attributes, props.id, props.controlled, children);
}