import { StackUiElement } from "../widget_models";

import type { StackAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Stack = (props: BaseProps<StackAttributes>, children?: DuitElement[]): StackUiElement => {
    return new StackUiElement(props.attributes, props.id, props.controlled, children);
}